//Frases to the horoscope, these are able to add more
const frase = [
    'You can expect a healthy day ahead. Adding meditation to your routine can take your health to the next level. A professional trip is likely to come unannounced. Some of you are also likely to travel abroad. Your finances for the day would largely be well managed. Take care while transacting online. You may have a tough time with your family today, make sure that small arguments do not become big',
    'You have a day full of motivation ahead. You can witness some ecstatic spiritual experience today. The toxicity in your working environment shall not affect you.Those working in the IT or software sector can expect support from colleagues in your office. Focus on nutrition instead of consuming mere calories. Adding health checkups to your routine might help. Your finances for the day would be largely balanced',
    'The day is good for traveling. Take your bags and get ready for a trip. You have a good day ahead in your professional life as well. You can expect some profits out of the investment that you made. Do not take your health lightly. Consider talking to a specialist for the problems you are troubled with. Investing in a residential property is likely to yield returns. Getting in touch with old pals may take you down the memory lane',
    'You can expect very good family time today. Any misunderstandings of the past could be expected to be resolved soon. Travelling may not be the best thing to do today. The investment that you have made in mutual funds may give you some profit today. Property can also be considered as an option. A healthy day awaits you ahead. You may become a health coach for a family member acting too lazy at home',
    'You have a very happy day ahead. In your professional life as well as your personal life, you can expect very happy moments today. As far as your finances are concerned, some profit can be expected out of them. Property is a good option for investing today. Travelling can reduce the stress of work life. Make sure that you focus on proper protein intake. Any renovation or construction work can also be taken up today by some',
    'You have a very healthy day ahead. You are likely to make some new friends today. Stay vigilant while making any online transactions. Your favorite stock can give you good profit. You can expect some appreciation for the work that you put in your official capacity. Property can be a good source of income today. You may have some inconvenience with your family. Make sure that you do not indulge in unnecessary arguments with them',
    'You have a high chance of getting some financial gain out of the investments that you have made. You can expect some benefits out of property as well. Your health is expected to be good for the day. Make sure you take supplements for the micronutrients that you fail to get from your food. You may face some problems in your professional life . Learn to stay positive. You\'re expected to have a good family time today',
    'You can look forward to a balanced day. Gains are expected from your favorite investments. Mutual funds can be a good option if you\'re a beginner. Some appreciation is expected for the ideas that you give to your boss. You should focus on your skin care. Give equal importance to your mental well being. Your younger siblings are a blessing for you, give them some small gifts',
    'The day brings a good opportunity for you to travel. Do not forget to take your camera with you! You can expect a spiritual experience today. Your finances may not be able to give you a good profit for the day, but property can be considered as a better option than others. Make sure that you get your nutrients right. There are some chances of your colleagues helping you out in a tough situation. Focus on spending good time with your family members',
    'You can expect a very good family time today. Your extended family members may surprise you with a visit. Today is a good day to make a visit to your favorite holding destination. You may have some issues in your professional life today. But you are likely to sail through them. Your finances are balanced for the day. Nothing major that can get you worried in regards to the money today',
    'You are likely to be in a good financial position for the day. Someone who owes you money may soon return it. However, traveling is not suggested for the day. You can expect good health today, make sure you do not consume junk food on a regular basis. Your professional life is likely to be smooth today. You can expect a good time with your family. Do not forget to tell your parents how much you love them',
    'Your professional life would be good today. The promotion that you\'ve been waiting for, may be around the corner now. You\'re likely to feel motivated throughout the day. But you may face some issues with your health. Visit your physician if you feel the need for it. Good family time is expected today. Property may be of some benefit for you today'
];
//Love focus frases to the horoscope, these are able to add more
const loveFocus = [
    'You can expect some quality time with your partner today',
    'Gifting some flowers to your partner would be a good idea for the day',
    'You need to put extra effort into your relationship. Do not indulge in arguments with your partner',
    'You need to put extra effort into your relationship. Do not indulge in arguments with your partner',
    'A date with your partner where you both watch your favorite web series, can be a good idea',
    'Writing letters to your partner about how much you love them is always in vogue',
    'Making your partner feel special is fine – just avoid being over possessive',
    'You may have a tough day with your partner. Do not let your ego overtake your love for your partner',
    'Your partner would appreciate it, if you pampered them even more',
    'any gift cannot be compensated with the quality time that you share with your partner today',
    'The day is very good for your love life. A dinner date would be a good idea today',
    'Some misunderstandings can cause an issue today. Learn to accept your mistakes in order to maintain a healthy relationship'
];
//Lucky colours frases to the horoscope, these are able to add more
const luckyColour = [
    'Pink','Light Blue','Purple','Magenta','Cream','Green','Peach','Maroon','White','Orange','Golden','Yellow'
];
//This function create a random horoscope
const randomHoroscopo = signHoroscope =>{
    const fraseIndex = Math.floor(Math.random()*frase.length);
    const loveFocusIndex = Math.floor(Math.random()*loveFocus.length);
    const luckyColourIndex = Math.floor(Math.random()*luckyColour.length);
    const luckyNumber = Math.floor(Math.random()*100);
    console.log(`${signHoroscope}:\n${frase[fraseIndex]}\nLove Focus: ${loveFocus[loveFocusIndex]}\nLucky Colour: ${luckyColour[luckyColourIndex]}\nLucky number: ${luckyNumber}`)
};
//User's sign, should be change to own sign
let sign = 'Aquarius';
randomHoroscopo(sign);
