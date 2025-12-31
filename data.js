export const tests = [
    {
        id: 1,
        title: "درون‌گرایی و برون‌گرایی",
        description: "آیا شما انرژی خود را از تنهایی می‌گیرید یا در جمع؟",
        icon: "UserCircle",
        questions: [
            { text: "در مهمانی‌ها معمولاً با افراد جدید به راحتی صحبت می‌کنم.", options: [{ text: "کاملاً موافقم", score: 4 }, { text: "موافقم", score: 3 }, { text: "مخالفم", score: 2 }, { text: "کاملاً مخالفم", score: 1 }] },
            { text: "بعد از یک روز شلوغ کاری، ترجیح می‌دهم تنها باشم تا استراحت کنم.", options: [{ text: "کاملاً موافقم", score: 1 }, { text: "موافقم", score: 2 }, { text: "مخالفم", score: 3 }, { text: "کاملاً مخالفم", score: 4 }] },
            { text: "دوستان زیادی دارم و دوست دارم همیشه با آن‌ها باشم.", options: [{ text: "کاملاً موافقم", score: 4 }, { text: "موافقم", score: 3 }, { text: "مخالفم", score: 2 }, { text: "کاملاً مخالفم", score: 1 }] },
            { text: "قبل از حرف زدن، معمولاً خوب فکر می‌کنم.", options: [{ text: "کاملاً موافقم", score: 1 }, { text: "موافقم", score: 2 }, { text: "مخالفم", score: 3 }, { text: "کاملاً مخالفم", score: 4 }] },
            { text: "حضور در مرکز توجه برای من لذت‌بخش است.", options: [{ text: "کاملاً موافقم", score: 4 }, { text: "موافقم", score: 3 }, { text: "مخالفم", score: 2 }, { text: "کاملاً مخالفم", score: 1 }] },
            { text: "کار کردن به تنهایی را به کار گروهی ترجیح می‌دهم.", options: [{ text: "موافقم", score: 1 }, { text: "مخالفم", score: 4 }] },
            { text: "معمولاً در جمع‌های بزرگ ساکت هستم.", options: [{ text: "موافقم", score: 1 }, { text: "مخالفم", score: 4 }] },
            { text: "ماجراجویی و هیجان را دوست دارم.", options: [{ text: "موافقم", score: 4 }, { text: "مخالفم", score: 1 }] },
            { text: "ابراز احساسات برای من کار سختی است.", options: [{ text: "موافقم", score: 1 }, { text: "مخالفم", score: 4 }] },
            { text: "من فردی پرانرژی و پرحرف هستم.", options: [{ text: "موافقم", score: 4 }, { text: "مخالفم", score: 1 }] }
        ],
        results: [
            { id: 'ext-low', range: [10, 20], title: "شدیداً درون‌گرا", desc: "شما از دنیای درونی خود انرژی می‌گیرید و تنهایی را به هر چیزی ترجیح می‌دهید." },
            { id: 'ext-mid', range: [21, 30], title: "نسبتاً درون‌گرا", desc: "شما میانه‌رو هستید اما تمایلات درون‌گرایانه بیشتری دارید." },
            { id: 'ext-high', range: [31, 40], title: "برون‌گرا", desc: "شما فردی اجتماعی هستید و از تعامل با دیگران لذت می‌برید." }
        ]
    },
    {
        id: 2,
        title: "عزت نفس روزنبرگ",
        description: "سنجش میزان ارزشی که برای خود قائل هستید.",
        icon: "Heart",
        questions: [
            { text: "احساس می‌کنم که شخص با ارزشی هستم.", options: [{ text: "موافقم", score: 4 }, { text: "تا حدودی", score: 2 }, { text: "مخالفم", score: 1 }] },
            { text: "فکر می‌کنم ویژگی‌های خوب زیادی دارم.", options: [{ text: "موافقم", score: 4 }, { text: "تا حدودی", score: 2 }, { text: "مخالفم", score: 1 }] },
            { text: "احساس می‌کنم در مجموع یک شکست‌خورده هستم.", options: [{ text: "موافقم", score: 1 }, { text: "تا حدودی", score: 2 }, { text: "مخالفم", score: 4 }] },
            { text: "قادرم کارها را به خوبیِ اکثر مردم انجام دهم.", options: [{ text: "موافقم", score: 4 }, { text: "تا حدودی", score: 2 }, { text: "مخالفم", score: 1 }] },
            { text: "نسبت به خودم نگرش مثبتی دارم.", options: [{ text: "موافقم", score: 4 }, { text: "تا حدودی", score: 2 }, { text: "مخالفم", score: 1 }] },
            { text: "از آنچه هستم رضایت دارم.", options: [{ text: "موافقم", score: 4 }, { text: "مخالفم", score: 1 }] },
            { text: "گاهی فکر می‌کنم به هیچ دردی نمی‌خورم.", options: [{ text: "موافقم", score: 1 }, { text: "مخالفم", score: 4 }] },
            { text: "آرزو می‌کردم کاش احترام بیشتری برای خودم قائل بودم.", options: [{ text: "موافقم", score: 1 }, { text: "مخالفم", score: 4 }] },
            { text: "فکر می‌کنم به اندازه دیگران توانمند هستم.", options: [{ text: "موافقم", score: 4 }, { text: "مخالفم", score: 1 }] },
            { text: "خودم را دوست دارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 1 }] }
        ],
        results: [
            { id: 'self-low', range: [10, 20], title: "عزت نفس پایین", desc: "نیاز دارید روی پذیرش خود و شناسایی توانمندی‌هایتان کار کنید." },
            { id: 'self-mid', range: [21, 30], title: "عزت نفس متوسط", desc: "در اکثر مواقع خود را باور دارید اما گاهی دچار تردید می‌شوید." },
            { id: 'self-high', range: [31, 40], title: "عزت نفس بالا", desc: "شما تصویر مثبتی از خود دارید و به توانایی‌هایتان اعتماد دارید." }
        ]
    },
    {
        id: 3,
        title: "میزان اضطراب",
        description: "سنجش سطح نگرانی و تنش‌های روزمره.",
        icon: "Activity",
        questions: [
            { text: "اغلب بی‌دلیل احساس نگرانی می‌کنم.", options: [{ text: "همیشه", score: 4 }, { text: "گاه‌وبیگاه", score: 2 }, { text: "هرگز", score: 0 }] },
            { text: "در تمرکز کردن روی کارها مشکل دارم.", options: [{ text: "همیشه", score: 4 }, { text: "گاه‌وبیگاه", score: 2 }, { text: "هرگز", score: 0 }] },
            { text: "احساس تپش قلب یا تنگی نفس ناگهانی دارم.", options: [{ text: "همیشه", score: 4 }, { text: "گاه‌وبیگاه", score: 2 }, { text: "هرگز", score: 0 }] },
            { text: "خواب من به دلیل فکرهای مزاحم مختل می‌شود.", options: [{ text: "همیشه", score: 4 }, { text: "گاه‌وبیگاه", score: 2 }, { text: "هرگز", score: 0 }] },
            { text: "زودرنج و تحریک‌پذیر شده‌ام.", options: [{ text: "همیشه", score: 4 }, { text: "گاه‌وبیگاه", score: 2 }, { text: "هرگز", score: 0 }] },
            { text: "احساس می‌کنم اتفاق بدی در راه است.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "دست‌هایم می‌لرزد یا عرق می‌کند.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از مکان‌های شلوغ فرار می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "مدام نگران قضاوت دیگران هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "احساس می‌کنم کنترل اوضاع از دستم خارج شده.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'anx-low', range: [0, 10], title: "آرامش مطلوب", desc: "سطح اضطراب شما در وضعیت نرمال و کنترل شده است." },
            { id: 'anx-mid', range: [11, 25], title: "اضطراب متوسط", desc: "کمی تنش دارید که ممکن است به دلیل شرایط فعلی زندگی باشد." },
            { id: 'anx-high', range: [26, 40], title: "اضطراب بالا", desc: "سطح اضطراب شما بالا است. پیشنهاد می‌شود با یک متخصص مشورت کنید." }
        ]
    },
    {
        id: 4,
        title: "هوش هیجانی (EQ)",
        description: "توانایی درک و مدیریت احساسات خود و دیگران.",
        icon: "Brain",
        questions: [
            { text: "می‌توانم به راحتی احساسات دیگران را تشخیص دهم.", options: [{ text: "بله", score: 4 }, { text: "تا حدی", score: 2 }, { text: "خیر", score: 0 }] },
            { text: "وقتی عصبانی هستم، می‌توانم خودم را کنترل کنم.", options: [{ text: "بله", score: 4 }, { text: "تا حدی", score: 2 }, { text: "خیر", score: 0 }] },
            { text: "می‌دانم دقیقاً چه زمانی و چرا ناراحتم.", options: [{ text: "بله", score: 4 }, { text: "تا حدی", score: 2 }, { text: "خیر", score: 0 }] },
            { text: "دیگران برای درددل و مشورت به من مراجعه می‌کنند.", options: [{ text: "بله", score: 4 }, { text: "تا حدی", score: 2 }, { text: "خیر", score: 0 }] },
            { text: "در موقعیت‌های بحرانی خونسردی خود را حفظ می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "تا حدی", score: 2 }, { text: "خیر", score: 0 }] },
            { text: "می‌توانم میانجی‌گری بین دوستانم را به خوبی انجام دهم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "احساساتم را به جای سرکوب کردن، ابراز می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "قبل از واکنش نشان دادن، سعی می‌کنم از دید طرف مقابل نگاه کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "زبان بدن دیگران را سریعاً متوجه می‌شوم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "در شرایط سخت، امیدم را از دست نمی‌دهم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'eq-low', range: [0, 15], title: "نیاز به تقویت EQ", desc: "شما می‌توانید با تمرین روی آگاهی از خود، هوش هیجانی‌تان را بالا ببرید." },
            { id: 'eq-mid', range: [16, 30], title: "EQ متوسط", desc: "درک خوبی از احساسات دارید اما در مدیریت آن‌ها نیاز به تمرین بیشتر است." },
            { id: 'eq-high', range: [31, 40], title: "EQ بالا", desc: "شما هوش هیجانی بالایی دارید و در روابط اجتماعی بسیار موفق هستید." }
        ]
    },
    {
        id: 5,
        title: "تیپ شخصیتی A و B",
        description: "آیا فردی عجول و رقابتی هستید یا آرام و صبور؟",
        icon: "Zap",
        questions: [
            { text: "همیشه عجله دارم حتی اگر کار مهمی نداشته باشم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "وقتی کسی آرام حرف می‌زند، بی‌حوصله می‌شوم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "در بازی‌ها و کارها بسیار رقابتی هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "معمولاً چند کار را همزمان انجام می‌دهم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "غذا خوردن من خیلی سریع است.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از انتظار در ترافیک یا صف بیزارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "حتی در تعطیلات هم به فکر کارهای عقب‌افتاده هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "دیگران مرا فردی عجول می‌دانند.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "وقتی بیکار هستم احساس گناه می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به نتیجه کار بیشتر از فرآیند آن اهمیت می‌دهم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'type-b', range: [0, 15], title: "تیپ B (آرام)", desc: "شما فردی صبور و آرام هستید و کمتر دچار استرس می‌شوید." },
            { id: 'type-mix', range: [16, 25], title: "تیپ مختلط", desc: "ترکیبی از ویژگی‌های هر دو تیپ را دارید." },
            { id: 'type-a', range: [26, 40], title: "تیپ A (عجول)", desc: "شما بسیار فعال، رقابتی و گاهی تحت فشار استرس زیاد هستید." }
        ]
    },
    {
        id: 6,
        title: "میزان خلاقیت",
        description: "ارزیابی توانایی شما در تفکر خارج از چارچوب.",
        icon: "Lightbulb",
        questions: [
            { text: "دوست دارم راه‌های جدیدی برای انجام کارهای قدیمی پیدا کنم.", options: [{ text: "همیشه", score: 4 }, { text: "گاهی", score: 2 }, { text: "به ندرت", score: 0 }] },
            { text: "تخیل قوی دارم و زیاد رویاپردازی می‌کنم.", options: [{ text: "همیشه", score: 4 }, { text: "گاهی", score: 2 }, { text: "به ندرت", score: 0 }] },
            { text: "به هنر و فعالیت‌های هنری علاقه دارم.", options: [{ text: "زیاد", score: 4 }, { text: "متوسط", score: 2 }, { text: "کم", score: 0 }] },
            { text: "ابهام و نبودِ قطعیت برایم جالب است نه ترسناک.", options: [{ text: "بله", score: 4 }, { text: "تا حدودی", score: 2 }, { text: "خیر", score: 0 }] },
            { text: "ایده‌های من معمولاً متفاوت از دیگران است.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از تغییر دکوراسیون یا ظاهر اشیا لذت می‌برم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "کنجکاوی زیادی در مورد نحوه کارکرد وسایل دارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به دنبال حل معماهای پیچیده هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از قواعد تکراری و خشک بیزارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "می‌توانم بین چیزهای بی‌ربط، ارتباط پیدا کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'cre-low', range: [0, 15], title: "تفکر منطقی", desc: "شما بیشتر به واقعیت‌ها و روش‌های آزموده شده تکیه می‌کنید." },
            { id: 'cre-mid', range: [16, 30], title: "خلاقیت متوسط", desc: "پتانسیل خوبی برای خلاقیت دارید اما گاهی در چارچوب‌ها می‌مانید." },
            { id: 'cre-high', range: [31, 40], title: "بسیار خلاق", desc: "ذهن شما مولد ایده‌های نو و جسورانه است." }
        ]
    },
    {
        id: 7,
        title: "مدیریت استرس",
        description: "چقدر در مواجهه با چالش‌ها خونسرد می‌مانید؟",
        icon: "ShieldCheck",
        questions: [
            { text: "وقتی مشکلی پیش می‌آید، سریع دست‌پاچه می‌شوم.", options: [{ text: "بله", score: 0 }, { text: "تا حدی", score: 2 }, { text: "خیر", score: 4 }] },
            { text: "می‌توانم خشم خود را در شرایط سخت کنترل کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "برای زمان‌های شلوغ برنامه ریزی می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "احساس می‌کنم کنترل زندگی از دستم خارج شده.", options: [{ text: "بله", score: 0 }, { text: "خیر", score: 4 }] },
            { text: "ورزش یا مدیتیشن برای آرامش انجام می‌دهم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به جای فرار از مشکلات، با آن‌ها روبرو می‌شوم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "می‌توانم در مواقع بحرانی به دیگران آرامش دهم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از اشتباهاتم برای آینده درس می‌گیرم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به توانایی خود در حل مشکلات ایمان دارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "خواب من تحت تاثیر استرس قرار نمی‌گیرد.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'str-low', range: [0, 15], title: "آسیب‌پذیر", desc: "نیاز دارید مهارت‌های مقابله با استرس را بیاموزید." },
            { id: 'str-mid', range: [16, 30], title: "مدیریت متوسط", desc: "در شرایط عادی خوب هستید اما در بحران‌ها کمی ضعیف عمل می‌کنید." },
            { id: 'str-high', range: [31, 40], title: "مدیر استرس", desc: "شما به خوبی می‌توانید در شرایط سخت آرامش خود را حفظ کنید." }
        ]
    },
    {
        id: 8,
        title: "مهارت‌های ارتباطی",
        description: "سنجش توانایی شما در انتقال پیام و شنیدن دیگران.",
        icon: "MessagesSquare",
        questions: [
            { text: "خوب به حرف دیگران گوش می‌دهم بدون قطع کردن.", options: [{ text: "همیشه", score: 4 }, { text: "گاهی", score: 2 }, { text: "هرگز", score: 0 }] },
            { text: "می‌توانم منظورم را به روشنی بیان کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "زبان بدن دیگران را متوجه می‌شوم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از انتقادهای سازنده استقبال می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "در گفتگوها فقط من صحبت نمی‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به راحتی می‌توانم با افراد غریبه سر صحبت را باز کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "احساساتم را با کلمات مناسب بیان می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "در جمع‌ها معمولاً دیگران را به حرف زدن تشویق می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "می‌توانم نه بگویم بدون اینکه طرف مقابل را برنجانم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به عقاید مخالف احترام می‌گذارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'com-low', range: [0, 15], title: "نیاز به تقویت", desc: "روی گوش دادن فعال بیشتر تمرکز کنید." },
            { id: 'com-mid', range: [16, 30], title: "متوسط", desc: "شما در اکثر مواقع ارتباط موثری دارید." },
            { id: 'com-high', range: [31, 40], title: "ارتباط‌گر ماهر", desc: "شما به خوبی با دیگران تعامل می‌کنید و پیام خود را می‌رسانید." }
        ]
    },
    {
        id: 9,
        title: "سبک رهبری",
        description: "آیا شما یک رهبر مادرزاد هستید؟",
        icon: "Crown",
        questions: [
            { text: "در کارهای گروهی معمولاً مسئولیت را قبول می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "می‌توانم به دیگران انگیزه بدهم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "تصمیم‌گیری در شرایط دشوار برایم راحت است.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به نظرات تیم احترام می‌گذارم اما تصمیم نهایی را می‌گیرم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "اهداف بلندمدت را فدای سود کوتاه‌مدت نمی‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "می‌توانم وظایف را به درستی بین افراد تقسیم کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "در مقابل شکست‌ها مسئولیت‌پذیر هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "دیگران برای حل مشکلات به من مراجعه می‌کنند.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "همیشه به دنبال یادگیری و پیشرفت هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به پیشرفت اعضای تیمم اهمیت می‌دهم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'lead-low', range: [0, 15], title: "پیرو یا همکار", desc: "شما ترجیح می‌دهید در تیم همکاری کنید تا اینکه فرمانده باشید." },
            { id: 'lead-mid', range: [16, 30], title: "مدیر", desc: "شما توانایی‌های مدیریتی خوبی دارید." },
            { id: 'lead-high', range: [31, 40], title: "رهبر مقتدر", desc: "شما توانایی هدایت و مدیریت گروه‌ها را دارید." }
        ]
    },
    {
        id: 10,
        title: "میزان کمال‌گرایی",
        description: "آیا استانداردهای شما بیش از حد بالاست؟",
        icon: "Target",
        questions: [
            { text: "اگر کاری ۱۰۰ درصد کامل نباشد، آن را شکست می‌دانم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "زیاد بابت اشتباهات کوچک خودم را سرزنش می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "شروع کارها را به دلیل ترس از عالی نشدن به تعویق می‌اندازم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از دیگران هم انتظار دارم بی‌نقص باشند.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "به ندرت از نتیجه کارهایم رضایت کامل دارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "جزئیات کوچک برای من بسیار حیاتی هستند.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "انتقاد از کارم را به سختی می‌پذیرم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "حتی در کارهای تفریحی هم به دنبال بهترین بودن هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "فکر می‌کنم دیگران مرا قضاوت می‌کنند.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "سخت‌گیرترین منتقد خودم هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'per-low', range: [0, 15], title: "کمال‌گرایی سالم", desc: "شما به دنبال کیفیت هستید اما خود را آزار نمی‌دهید." },
            { id: 'per-high', range: [16, 40], title: "کمال‌گرایی وسواسی", desc: "استانداردهای بالای شما ممکن است باعث اضطراب شود." }
        ]
    },
    {
        id: 11,
        title: "سنجش افسردگی",
        description: "ارزیابی خلق‌وخو و علائم بالینی غم و اندوه.",
        icon: "CloudRain",
        questions: [
            { text: "احساس می‌کنم آینده تیره و تار است.", options: [{ text: "همیشه", score: 4 }, { text: "گاهی", score: 2 }, { text: "هرگز", score: 0 }] },
            { text: "اشتهایم به شدت تغییر کرده است.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از فعالیت‌هایی که قبلاً لذت می‌بردم، دیگر لذت نمی‌برم.", options: [{ text: "دقیقاً", score: 4 }, { text: "تا حدی", score: 2 }, { text: "خیر", score: 0 }] },
            { text: "احساس خستگی مفرط و بی‌انرژی بودن دارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "فکر می‌کنم فرد بی‌ارزشی هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "گریه کردن‌های بی‌دلیل و مکرر دارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "در تصمیم‌گیری‌های ساده هم ناتوان هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "الگوی خوابم (پرخوابی یا کم‌خوابی) بهم خورده است.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "احساس گناه نسبت به گذشته دارم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "تمایل دارم در خانه بمانم و با کسی حرف نزنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'dep-low', range: [0, 10], title: "خلق طبیعی", desc: "شما در وضعیت پایداری هستید." },
            { id: 'dep-mid', range: [11, 25], title: "افسردگی خفیف", desc: "بهتر است کمی بیشتر به تفریح و سلامت روان اهمیت دهید." },
            { id: 'dep-high', range: [26, 40], title: "نیاز به بررسی", desc: "پیشنهاد می‌شود با یک روانشناس صحبت کنید." }
        ]
    },
    {
        id: 12,
        title: "اعتماد به نفس",
        description: "چقدر به توانایی‌های خود باور دارید؟",
        icon: "Shield",
        questions: [
            { text: "در جمع‌ها با صدای رسا صحبت می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "از پذیرش مسئولیت‌های جدید نمی‌ترسم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "فکر می‌کنم فرد جذابی هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "می‌توانم به راحتی از حق خودم دفاع کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "شکست‌هایم را جزیی از مسیر یادگیری می‌بینم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "در چشمان طرف مقابل هنگام صحبت نگاه می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "توانایی یادگیری مهارت‌های دشوار را در خود می‌بینم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "نظر دیگران در مورد من، حالم را بد نمی‌کند.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "خودم را با دیگران مقایسه نمی‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "در کارهایم مستقل عمل می‌کنم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'conf-low', range: [0, 15], title: "نیاز به خودباوری", desc: "باید روی شناسایی نقاط قوت خود کار کنید." },
            { id: 'conf-high', range: [16, 40], title: "اعتماد به نفس خوب", desc: "شما تصویر مثبتی از توانمندی‌هایتان دارید." }
        ]
    },
    {
        id: 13,
        title: "منبع کنترل",
        description: "آیا سرنوشت شما دست خودتان است یا شانس؟",
        icon: "Anchor",
        questions: [
            { text: "موفقیت‌های من نتیجه تلاش خودم است.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "اتفاقات بد زندگی به خاطر شانس بد من است.", options: [{ text: "بله", score: 0 }, { text: "خیر", score: 4 }] },
            { text: "من می‌توانم آینده‌ام را آنطور که می‌خواهم بسازم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "بیشتر مردم قربانی شرایط هستند.", options: [{ text: "بله", score: 0 }, { text: "خیر", score: 4 }] },
            { text: "اگر سخت تلاش کنم حتماً به نتیجه می‌رسم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "دنیا توسط چند نفر قدرتمند اداره می‌شود و ما نقشی نداریم.", options: [{ text: "بله", score: 0 }, { text: "خیر", score: 4 }] },
            { text: "مشکلات مالی من تقصیر دولت یا خانواده است.", options: [{ text: "بله", score: 0 }, { text: "خیر", score: 4 }] },
            { text: "شکست خوردن یعنی من به اندازه کافی تلاش نکردم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] },
            { text: "شانس در زندگی نقش تعیین‌کننده‌ای دارد.", options: [{ text: "بله", score: 0 }, { text: "خیر", score: 4 }] },
            { text: "من فرمانده زندگی خودم هستم.", options: [{ text: "بله", score: 4 }, { text: "خیر", score: 0 }] }
        ],
        results: [
            { id: 'loc-ext', range: [0, 15], title: "کنترل بیرونی", desc: "شما معتقدید عوامل بیرونی زندگی شما را رقم می‌زنند." },
            { id: 'loc-int', range: [16, 40], title: "کنترل درونی", desc: "شما مسئولیت زندگی خود را می‌پذیرید و به تلاش معتقدید." }
        ]
    }
];

// Seed remaining tests with more intelligent content generation
const titles = [
    "سبک دلبستگی", "میزان همدلی", "تیپ شخصیتی نوآور", "اعتیاد به کار", "سطح ریسک‌پذیری", "تیپ اجتماعی", "مدیریت زمان",
    "میزان صبوری", "هوش اجتماعی", "تمایل به رهبری", "تمرکز و دقت", "سطح خوش‌بینی", "وابستگی عاطفی", "تیپ خرید", 
    "قدرت نه گفتن", "علاقه به طبیعت", "نظم شخصی", "میزان کنجکاوی", "تیپ یادگیری", "تاب‌آوری", "اعتماد به غریبه‌ها", 
    "علاقه به هنر", "روحیه رقابتی", "کنترل خشم", "تصمیم‌گیری", "رویاپردازی", "علاقه به مطالعه", "روحیه تیمی", 
    "قدرت حافظه", "تحمل ابهام", "تمایل به سفر", "اعتماد به نفس کاذب", "مدیریت بحران", "بخشش", "پایداری در هدف", 
    "خرافاتی بودن", "تیپ غذایی", "وابستگی به موبایل", "قضاوت دیگران", "احساس تنهایی", "قدرت سخنوری", 
    "ترس از آینده", "صداقت", "مهارت مالی", "احترام به قوانین", "نوع‌دوستی", "رضایت از زندگی"
];

const icons = ["Link", "Smile", "Lightbulb", "Briefcase", "Dices", "Users", "Clock", "Hourglass", "MessageCircle", "Flag", "Search", "Sun", "HeartHandshake", "ShoppingBag", "XCircle", "Trees", "LayoutGrid", "HelpCircle", "BookOpen", "Dumbbell", "Eye", "Palette", "Medal", "Flame", "Scale", "Cloud", "Book", "Gem", "Key", "Milestone", "Plane", "Ghost", "LifeBuoy", "Eraser", "Mountain", "Sparkles", "Utensils", "Smartphone", "Gavel", "UserMinus", "Mic2", "Radiation", "ShieldAlert", "Coins", "TrafficCone", "HeartPulse", "PartyPopper"];

const questionTemplates = [
    "من معمولاً در موقعیت‌های مرتبط با {title} موفق عمل می‌کنم.",
    "دیگران مرا فردی توانمند در {title} می‌شناسند.",
    "فکر می‌کنم {title} یکی از نقاط قوت من است.",
    "در شرایط دشوار، {title} من به کمک من می‌آید.",
    "همیشه سعی می‌کنم {title} خود را بهبود ببخشم.",
    "بدون {title}، زندگی برای من سخت خواهد بود.",
    "من به {title} خود اهمیت زیادی می‌دهم.",
    "رفتار من نشان‌دهنده سطح بالای {title} در من است.",
    "دوستانم برای مشورت در مورد {title} به من مراجعه می‌کنند.",
    "من در مورد {title} خود کاملاً صادق هستم."
];

for (let i = 14; i <= 60; i++) {
    const title = titles[i - 14] || "تست روانشناسی";
    const icon = icons[i - 14] || "Activity";
    
    tests.push({
        id: i,
        title: title,
        description: `آزمون تخصصی برای سنجش دقیق ${title} در ابعاد مختلف زندگی.`,
        icon: icon,
        questions: Array.from({ length: 10 }).map((_, qIdx) => ({
            text: questionTemplates[qIdx].replace(/{title}/g, title),
            options: [
                { text: "کاملاً موافقم", score: 4 },
                { text: "موافقم", score: 3 },
                { text: "مخالفم", score: 2 },
                { text: "کاملاً مخالفم", score: 1 }
            ]
        })),
        results: [
            { id: `res-${i}-1`, range: [10, 20], title: "سطح پایین", desc: `شما در زمینه ${title} نیاز به تمرین و خودآگاهی بیشتری دارید.` },
            { id: `res-${i}-2`, range: [21, 30], title: "سطح متوسط", desc: `وضعیت شما در زمینه ${title} متعادل و قابل قبول است.` },
            { id: `res-${i}-3`, range: [31, 40], title: "سطح عالی", desc: `تبریک! شما در زمینه ${title} مهارت و آگاهی بسیار بالایی دارید.` }
        ]
    });
}