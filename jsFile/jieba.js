var nodejieba = require("nodejieba");
var startTime = Date.now();

var keyWordsNum = 2;
console.log("time", (Date.now() - startTime) % 10000, "ms ::begin segment");
// var result = nodejieba.extract("三种单纯然而极其强烈的激情支配着我的一生。那就是对于爱情的渴望，对于知识的追求，以及对于人类苦难痛彻肺腑的怜悯。这些激情犹如狂风，把我伸展到绝望边缘的深深的苦海上东抛西掷，使我的生活没有定向。我追求爱情，首先因为它叫我销魂。爱情使人销魂的魅力使我常常乐意为了几小时这样的快乐而牺牲生活中的其他一切。我追求爱情，又因为它减轻孤独感——那种一个颤抖的灵魂望着世界边缘之外冰冷而无生命的无底深渊时所感到的可怕的孤独。我追求爱情，还因为爱的结合使我在一种神秘的缩影中提前看到了圣者和诗人曾经想像过的天堂。这就是我所追求的，尽管人的生活似乎还不配享有它，但它毕竟是我终于找到的东西。我以同样的热情追求知识，我想理解人类的心灵，我想了解星辰为何灿烂，我还试图弄懂毕达哥拉斯学说的力量，是这种力量使我在无常之上高踞主宰地位。我在这方面略有成就，但不多。爱情和知识只要存在，总是向上导往天堂。但是，怜悯又总是把我带回人间。痛苦的呼喊在我心中反响回荡，孩子们受饥荒煎熬，无辜者被压迫者折磨，孤弱无助的老人在自己的儿子眼中变成可恶的累赘，以及世上触目皆是的孤独、贫困和痈苦，这些都是对人类应该过的生活的嘲弄。我渴望能减少罪恶，可我做不到，于是我感到痛苦。这就是我的一生。我觉得这一生是值得活的，如果真有可能再给我一次机会，我将欣然再重活—次", keyWordsNum);
var result = nodejieba.extract("火星基本上是沙漠行星，地表沙丘、砾石遍布且没有稳定的液态水体（前不久，美国宇航局公布火星上有少量的水）。二氧化碳为主的大气既稀薄又寒冷，沙尘悬浮其中，每年常有尘暴发生。火星两极皆有水冰与干冰组成的极冠会随着季节消长。与地球相比，火星地质活动较不活跃，地表地貌大部份于远古较活跃的时期形成，有密布的陨石坑、火山与峡谷，包括太阳系最高的山：奥林帕斯山和最大的峡谷：水手号峡谷。另一个独特的地形特征是南北半球的明显差别：南方是古老、充满陨石坑的高地，北方则是较年轻的平原。火星有两个天然卫星：火卫一和火卫二，形状不规则，可能是捕获的小行星。在地球，火星肉眼可见，最高亮度可达-2.9等，八大行星中比木星、金星暗。2015年9月28日，美国航天局宣布火星存在流动水", keyWordsNum);
console.log(result);
console.log("time", (Date.now() - startTime) % 10000, "ms ::end segment");
