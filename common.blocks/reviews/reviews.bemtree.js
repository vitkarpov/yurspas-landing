block('reviews').content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: [
            {
                block: 'caption',
                mix: [{ block: 'reviews', elem: 'caption' }],
                content: 'Отзывы'
            },
            {
                elem: 'subcaption',
                content: 'Отзывы клиентов о работе адвоката Карпова'
            },
            {
                block: 'reviews',
                elem: 'slider',
                js: true,
                content: [
                    {
                        elem: 'slide',
                        content: [
                            {
                                block: 'reviews-preview',
                                url: 'http://yurspas.ru/img/upload/review-10.jpg'
                            },
                            {
                                block: 'reviews',
                                elem: 'quote',
                                content: [
                                    'Здравствуйте, Сергей Викторович!',
                                    'Пишет Вам пенсионерка Конькова Мария Львовна, которая обращалась к Вам 8 июля 2013 года с просьбой помочь восстановить справедливость и вернуть незаконно взимаемые с меня деньги за капремонт.',
                                    'После письма из прокуратуры в управляющую компанию, они начали возвращать мне незаконно снятые деньги!',
                                    'Еще раз благодарю вас за профессионализм и отзывчивость.',
                                ]
                            },
                            {
                                block: 'reviews',
                                elem: 'author',
                                content: 'Мария Конькова'
                            }
                        ]
                    },
                    {
                        elem: 'slide',
                        content: [
                            {
                                block: 'reviews-preview',
                                url: 'http://yurspas.ru/img/upload/review-12.jpg'
                            },
                            {
                                block: 'reviews',
                                elem: 'quote',
                                content: [
                                    'Здравствуйте, Сергей Викторович!',
                                    'Жизненного опыта, стойкости к преодолению трудностей судьбы Вам, а так же чувства юмора (п 6. Вашего рассказа) как говорится не занимать.',
                                    'Спасибо Вам за Ваши исчерпывающие и правдивые ответы. Чувствуется, что Вы человек старой, советской и, к тому же, военной закалки.',
                                    'Хочется обращаться к Вам за ответом вновь и вновь, с уверенностью на аргументированный и честный ответ',
                                ]
                            },
                            {
                                block: 'reviews',
                                elem: 'author',
                                content: 'Дмитрий Калинин'
                            }
                        ]
                    },
                    {
                        elem: 'slide',
                        content: [
                            {
                                block: 'reviews-preview',
                                url: 'http://yurspas.ru/img/upload/review-13.jpg'
                            },
                            {
                                block: 'reviews',
                                elem: 'quote',
                                content: [
                                    'Я, старший лейтенант Мезенцев А.С., был увлоен с военной службы приказом командующего ЮВО в связи с лишением допуска к Государственной тайне',
                                    'Обжаловал это увольниение в 5ГВС.',
                                    'Решением суда этот приказ об увольниении отменен.'
                                ]
                            },
                            {
                                block: 'reviews',
                                elem: 'author',
                                content: 'А. Мезенцев'
                            }
                        ]
                    }
                ]
            }
        ]
    };
})
