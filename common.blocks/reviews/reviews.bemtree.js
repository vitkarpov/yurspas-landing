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
                                url: 'http://yurspas.ru/img/upload/04022016.jpg'
                            },
                            {
                                block: 'reviews',
                                elem: 'quote',
                                content: [
                                    'Выражаем искреннюю благодарность заведующему филиалом «Ростовская городская юридическая контора № 1» адвокату Карпову Сергею Викторовичу за успешное представление наших законных прав в Волгодонском районном суде Ростовской области на протяжении более 17 месяцев, как стороны истцов, в очень сложном гражданском судебном процессе по делу о наследовании имущества после весьма подозрительных смертей бездетной семьи нашего брата.',
                                    'В ходе рассмотрения дела была доказана незаконность двух нотариальных завещаний, а также успешно отклонен встречный иск ответчика. Таким образом, в ходе разбирательства сложнейшего дела адвокат Карпов С.В. проявил свой высокий профессиональный уровень и ответственный подход к работе.'
                                ]
                            },
                            {
                                block: 'reviews',
                                elem: 'author',
                                content: 'Щербаков В.И.'
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
                                    'Я, старший лейтенант Мезенцев А.С.,  обжаловал решение Командующего ЮВО о моем увольнении в 5 гарнизонный военный суд. Решением суда приказ отменен. Представитель Командующего обратился в Северо-Кавказский окружной военный суд с апелляционной жалобой. В связи с этим я воспользовался услугами адвоката Карпова С.В. по рекомендации его клиентов.',
                                    'На судебный процесс я прибыть не смог, т.к. нахожусь в республике Армения.  Адвокат Карпов С.В. добросовестно отнесся к моему делу. Держал меня в курсе всех событий, связанных с судебным процессом.',
                                    'Благодарю за проделанную работу.'
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
