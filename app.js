import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom';
import * as LucideIcons from 'lucide-react';
import htm from 'htm';
import { tests } from './data.js';

const html = htm.bind(React.createElement);

const App = () => {
    const [screen, setScreen] = useState('list'); // 'list', 'quiz', 'result'
    const [currentTest, setCurrentTest] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [finalScore, setFinalScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [stats, setStats] = useState({});

    // Load and initialize stats from localStorage
    useEffect(() => {
        const savedStats = localStorage.getItem('psych_test_stats');
        if (savedStats) {
            setStats(JSON.parse(savedStats));
        } else {
            // Initial seed data to make charts look populated
            const initialSeed = {};
            tests.forEach(test => {
                test.results.forEach(res => {
                    initialSeed[res.id] = Math.floor(Math.random() * 50) + 10;
                });
            });
            setStats(initialSeed);
            localStorage.setItem('psych_test_stats', JSON.stringify(initialSeed));
        }
    }, []);

    const updateStats = (resultId) => {
        const newStats = { ...stats, [resultId]: (stats[resultId] || 0) + 1 };
        setStats(newStats);
        localStorage.setItem('psych_test_stats', JSON.stringify(newStats));
    };

    const playSound = (src) => {
        const audio = new Audio(src);
        audio.play().catch(e => console.log("Audio play blocked", e));
    };

    const startTest = (test) => {
        playSound('click.mp3');
        setCurrentTest(test);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedOption(null);
        setIsTransitioning(false);
        setScreen('quiz');
    };

    const handleAnswer = (index, score) => {
        if (isTransitioning) return;
        
        playSound('click.mp3');
        setSelectedOption(index);
        setIsTransitioning(true);

        setTimeout(() => {
            const newAnswers = [...answers, score];
            setAnswers(newAnswers);

            if (currentQuestionIndex < currentTest.questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
                setIsTransitioning(false);
            } else {
                const total = newAnswers.reduce((a, b) => a + b, 0);
                setFinalScore(total);
                
                // Find result and update stats
                const result = currentTest.results.find(r => total >= r.range[0] && total <= r.range[1]) 
                                || currentTest.results[currentTest.results.length - 1];
                updateStats(result.id);

                playSound('complete.mp3');
                setScreen('result');
                setIsTransitioning(false);
            }
        }, 500);
    };

    const getResult = () => {
        if (!currentTest) return null;
        return currentTest.results.find(r => finalScore >= r.range[0] && finalScore <= r.range[1]) 
            || currentTest.results[currentTest.results.length - 1];
    };

    const renderIcon = (iconName, props = {}) => {
        const IconComponent = LucideIcons[iconName];
        return IconComponent ? React.createElement(IconComponent, props) : null;
    };

    const FallingBackground = () => {
        const icons = ['Brain', 'Heart', 'Smile', 'Star', 'Cloud', 'Target', 'Zap', 'Anchor', 'Sun', 'Moon'];
        const [elements, setElements] = useState([]);

        useEffect(() => {
            const newElements = Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                icon: icons[Math.floor(Math.random() * icons.length)],
                left: Math.random() * 100,
                duration: 15 + Math.random() * 20,
                delay: Math.random() * -20,
                size: 15 + Math.random() * 25
            }));
            setElements(newElements);
        }, []);

        return html`
            <div id="bg-canvas">
                ${elements.map(el => html`
                    <div 
                        key=${el.id}
                        className="falling-symbol"
                        style=${{
                            left: `${el.left}%`,
                            animationDuration: `${el.duration}s`,
                            animationDelay: `${el.delay}s`
                        }}
                    >
                        ${renderIcon(el.icon, { size: el.size })}
                    </div>
                `)}
            </div>
        `;
    };

    const StatsChart = ({ results }) => {
        const totalParticipants = results.reduce((sum, res) => sum + (stats[res.id] || 0), 0);
        
        return html`
            <div className="mt-8 w-full">
                <h4 className="text-right text-sm font-bold text-slate-500 mb-4">آمار سایر شرکت‌کنندگان:</h4>
                <div className="space-y-4">
                    ${results.map(res => {
                        const count = stats[res.id] || 0;
                        const percentage = totalParticipants > 0 ? (count / totalParticipants) * 100 : 0;
                        const isUserResult = getResult()?.id === res.id;
                        
                        return html`
                            <div key=${res.id} className="relative">
                                <div className="flex justify-between text-xs mb-1 font-bold">
                                    <span className=${isUserResult ? "text-blue-600" : "text-slate-600"}>${res.title} ${isUserResult ? "(شما)" : ""}</span>
                                    <span className="text-slate-400">${Math.round(percentage)}% (${count} نفر)</span>
                                </div>
                                <div className="h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                    <div 
                                        className=${`h-full transition-all duration-1000 ${isUserResult ? 'bg-blue-500' : 'bg-slate-400'}`}
                                        style=${{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        `;
                    })}
                </div>
            </div>
        `;
    };

    return html`
        <div className="max-w-md mx-auto h-screen flex flex-col relative overflow-hidden text-slate-800">
            <${FallingBackground} />
            <header className="glass p-4 shadow-sm z-20 flex items-center justify-between">
                ${screen !== 'list' && html`
                    <button 
                        onClick=${() => { playSound('click.mp3'); setScreen('list'); }}
                        className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                    >
                        <${LucideIcons.ArrowRight} size=${24} />
                    </button>
                `}
                <h1 className="text-lg font-bold flex-grow text-center">
                    ${screen === 'list' ? 'آزمون‌های شخصیت‌شناسی' : currentTest?.title}
                </h1>
                <div className="w-10"></div>
            </header>

            <main className="flex-grow overflow-y-auto scroll-hide p-4">
                ${screen === 'list' && html`
                    <div className="grid grid-cols-1 gap-3 pb-24">
                        ${tests.map((test, idx) => html`
                            <div 
                                key=${test.id}
                                onClick=${() => startTest(test)}
                                className="glass p-4 rounded-2xl shadow-sm border border-white/50 flex items-center gap-4 cursor-pointer hover:bg-white/90 active:scale-95 transition-all fade-in"
                            >
                                <div className="text-xs font-bold text-slate-400 w-6">${idx + 1}.</div>
                                <div className="bg-blue-50 p-3 rounded-xl text-blue-500">
                                    ${renderIcon(test.icon, { size: 24 })}
                                </div>
                                <div className="flex-grow">
                                    <h2 className="font-bold text-base">${test.title}</h2>
                                    <p className="text-[10px] text-slate-500 line-clamp-1">${test.questions.length} سوال - ${test.description}</p>
                                </div>
                                <${LucideIcons.ChevronLeft} className="text-slate-300" size=${18} />
                            </div>
                        `)}
                    </div>
                `}

                ${screen === 'quiz' && currentTest && html`
                    <div key=${currentQuestionIndex} className=${`h-full flex flex-col ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                        <div className="mb-6">
                            <div className="flex justify-between text-[11px] mb-2 font-bold text-slate-500">
                                <span>سوال ${currentQuestionIndex + 1} از ${currentTest.questions.length}</span>
                                <span>پیشرفت: ${Math.round(((currentQuestionIndex) / currentTest.questions.length) * 100)}%</span>
                            </div>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div 
                                    className="bg-blue-500 h-full transition-all duration-300" 
                                    style=${{ width: `${((currentQuestionIndex + 1) / currentTest.questions.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-3xl mb-8 shadow-sm min-h-[140px] flex items-center justify-center text-center border border-white/80">
                            <h3 className="text-lg font-bold leading-relaxed text-slate-700">
                                ${currentTest.questions[currentQuestionIndex].text}
                            </h3>
                        </div>

                        <div className="space-y-3">
                            ${currentTest.questions[currentQuestionIndex].options.map((opt, idx) => html`
                                <button
                                    key=${idx}
                                    onClick=${() => handleAnswer(idx, opt.score)}
                                    className=${`w-full p-4 glass rounded-2xl text-right font-bold transition-all border shadow-sm ${selectedOption === idx ? 'bg-blue-600 text-white ring-4 ring-blue-100 border-blue-600' : 'border-white hover:bg-blue-50'}`}
                                >
                                    ${opt.text}
                                </button>
                            `)}
                        </div>
                    </div>
                `}

                ${screen === 'result' && html`
                    <div className="flex flex-col items-center py-4 fade-in">
                        <div className="bg-yellow-400/20 p-5 rounded-full mb-6 text-yellow-600">
                            <${LucideIcons.Trophy} size={50} />
                        </div>
                        <h2 className="text-xl font-black mb-4">تحلیل نتیجه نهایی</h2>
                        <div className="glass p-6 rounded-3xl w-full border border-blue-100 shadow-lg mb-4">
                            <h3 className="text-xl font-black text-blue-600 mb-3">${getResult()?.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                                ${getResult()?.desc}
                            </p>
                        </div>

                        <${StatsChart} results=${currentTest.results} />

                        <button 
                            onClick=${() => { playSound('click.mp3'); setScreen('list'); }}
                            className="mt-10 mb-10 bg-blue-600 text-white w-full py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-700 active:scale-95 transition-all"
                        >
                            انجام آزمون‌های دیگر
                        </button>
                    </div>
                `}
            </main>
        </div>
    `;
};

const root = createRoot(document.getElementById('root'));
root.render(html`<${App} />`);