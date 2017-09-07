/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This was built using the Amazon Alexa Skills nodejs skill development kit.
 * This skill supports multiple lauguages. (en, de-DE).
 * With enough time and effort, the plans for this skill is to be able to learn
 * additional "real facts" by asking users for input
 */

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = INSERT YOUR ALEXA ID HERE

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'Your arm splits off into 5 tiny arms?',
                'The equator is long enough to stretch around the Earth?',
                'There are more planes in the sea than submarines in the sky?',
                "Three out of every four people represent 75% of the world's population?",
                'The page number in a book denotes the number of the page you are on?', //5
                'Taylor Swift is a singer, not a comment on how fast a person name Taylor is?',
                'A six pack of soda is named after the number of sodas you get in a pack?',
                'You go to college to pay for college?',
                'The average number of hands in the world is less than 2?',
                'Nothing is actually on fire, fire is actually on something?',//10
                "Clown fish aren't actually part clown?",
                'French toast can be eaten in any country?',
                'In Africa, every 60 seconds a minute passes?',
                'Your chances of death increase by 100% after birth?',
                'The tallest man in the world has two legs?',//15
                "Dwayne the rock johnson isn't actually a rock?",
                'If you take your age, subtract two, then add two, that is your age?',
                'Oranges are orange?',
                'Thinking about going to the gym burns between 0 and 0 calories...trust me, I know?',
                'Your belly button is your first scar?',//20
                "You shouldn't try to breathe under water?",
                'If everyone were to hold hands around the equator, a lot of people would drown?',
                'When a pregnant woman swims, she becomes a human submarine?',
                'Studies show that if you are bald, you have no hair?',
                'If you are in an argument, always remember that on the other hand, you have another set of fingers?', //25
                'When you close your eyes you cant see?',
                'Most people are born without clothes?',
                'The leading cause of drowning is caused by liquids?',
                'The average human body contains enough bones to make one skeleton?',
                'The number one cause of divorce is marriage?',//30
                'Glass cups are called glassware because they are made from glass?',
                'Your dad is your father...just ask Luke?',
                'You were born on your birthday?',
                'They are called movies because they move?',
                'Uncle Same refers to the United States?',//35
                "Neil Armstrong's abbreviated name is Neil A...backwards it spells Aliens?",
                'Cupcakes are cup sized cakes?',
                'Ponies are not baby horses?',
                'Earmuffs are used to keep your ears warm?',
                'Pickles are pickled cucumbers?',//40
                'Some people keep cats as pets?',
                'The sun is on fire?',
                'Alarm clocks are named because they are clocks that have alarms in them?',
                'Ice is frozen water, and it is cold?',
                "French fries aren't actualy french?",//45
                'When the sun goes down, its called night. Its gets pretty dark too?',
                'Stick notes are sticky?',
                'Birds have wings?',
                'The size of your foot is about the same size as your forearm?',
                'Soap is used to clean things?',//50
                
                
                
                
                
            ],
            SKILL_NAME: 'Real Facts',
            GET_FACT_MESSAGE: "Did you know that ",
            HELP_MESSAGE: 'Tell me if you want a fact by saying...Alexa, tell me a real fact. You can also exit by saying stop or exit',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Come back when you need another great fact!',
        },
    },
    'de': {
        translation: {
            FACTS: [
                "Dein Arm bricht in 5 winzige Arme?",
                "Der Äquator ist lang genug, um sich um die Erde zu strecken?",
                "Es gibt mehr Flugzeuge im Meer als U-Boote am Himmel?",
                "Drei von vier Personen repräsentieren 75% der Weltbevölkerung?",
                'Die Seitennummer in einem Buch bezeichnet die Nummer der Seite, auf der du bist?',                                              // 5
                'Taylor Swift ist ein Sänger, kein Kommentar zu, wie schnell ein Person Name Taylor ist?',
                "Ein Six Pack von Soda ist nach der Anzahl der Limonaden benannt, die man in einer Packung bekommt?",
                "Du gehst aufs College, um College zu bezahlen?",
                "Die durchschnittliche Anzahl der Hände in der Welt ist weniger als 2? '",
                "Nichts ist eigentlich auf Feuer, Feuer ist eigentlich auf etwas?",                                                              //10
                "Clownfische sind nicht wirklich Teil Clown?",
                "Französischer Toast kann in jedem Land gegessen werden?",
                "In Afrika, alle 60 Sekunden eine Minute vergeht?",
                "Ihre Chancen auf den Tod erhöhen sich um 100% nach der Geburt?",
                "Der höchste Mann in der Welt hat zwei Beine?",                                                                                  //15
                "Dwayne der Rock Johnson ist eigentlich kein Rock?",
                "Wenn du dein Alter hast, subtrahierst du zwei, dann füge zwei hinzu, das ist dein Alter? '",
                "Orangen sind orange?",
                'Denken über gehen in die Turnhalle brennt zwischen 0 und 0 Kalorien ... Vertrauen Sie mir, ich weiß?',
                "Dein Bauchknopf ist deine erste Narbe?",                                                                                        // 20
                "Du solltest nicht versuchen, unter Wasser zu atmen?",
                "Wenn alle die Hände um den Äquator halten würden, würden viele Leute ertrinken?",
                "Wenn eine schwangere Frau schwimmt, wird sie ein menschliches U-Boot?",
                "Studien zeigen, dass, wenn Sie kahl sind, haben Sie keine Haare?'",
                "Wenn Sie in einem Argument sind, denken Sie immer daran, dass Sie auf der anderen Seite einen anderen Satz von Fingern haben?", // 25
                "Wenn du deine Augen schließt, kannst du nicht sehen?",
                "Die meisten Menschen sind ohne Kleider geboren?",
                "Die führende Ursache des Ertrinkens wird durch Flüssigkeiten verursacht?",
                "Der durchschnittliche menschliche Körper enthält genug Knochen, um ein Skelett zu machen?",
                "Die Nummer eins Ursache der Scheidung ist die Ehe?",                                                                            // 30
                "Glasbecher heißen Glaswaren, weil sie aus Glas hergestellt sind?",
                "Dein Vater ist dein Vater ... frag einfach Lukas?",
                'Sie wurden an Ihrem Geburtstag geboren?',
                "Sie heißen Filme, weil sie sich bewegen?",
                "Onkel Same bezieht sich auf die Vereinigten Staaten?",                                                                          // 35
                "Neil Armstrongs abgekürzter Name ist Neil A ... rückwärts buchstabiert Aliens?",
                "Cupcakes sind Cup-Size-Kuchen?",
                "Ponys sind keine Babypferde?",
                "Ohrenschützer werden benutzt, um deine Ohren warm zu halten?",
                "Essiggurken sind eingelegte Gurken?",                                                                                           // 40
                "Manche Leute halten Katzen wie Haustiere?",
                "Die Sonne ist auf Feuer ?",
                "Wecker sind genannt, weil sie Uhren sind, die Alarme in ihnen haben?",
                "Eis ist gefrorenes Wasser, und es ist kalt?",
                "Pommes Frites sind nicht wirklich französisch?",                                                                                // 45
                "Wenn die Sonne untergeht, heißt die Nacht. Es wird ziemlich dunkel zu? '",
                "Sticknoten sind klebrig?",
                "Vögel haben Flügel?",
                "Die Größe deines Fußes ist ungefähr die gleiche Größe wie dein Unterarm?",
                "Seife wird verwendet, um Dinge zu reinigen?",                                                                                   // 50
            ],
            SKILL_NAME: 'Wirkliche Tatsachen',
            GET_FACT_MESSAGE: "Wussten Sie das schon ",
            HELP_MESSAGE: "Sag mir, wenn du eine Tatsache wünschst, indem du sagst...Alexa, erzähl mir eine echte Tatsache. Du kannst auch mit Reden gehen oder aufhörenz",
            HELP_REPROMPT: "Was kann ich dir helfen?",
            STOP_MESSAGE: "Komm zurück, wenn du eine große Tatsache brauchst!",
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random real fact from the real facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
