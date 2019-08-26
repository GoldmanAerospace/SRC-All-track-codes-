// 2nd weekend, "SPAce Grand prix"
// All changes is used, relevant at the time of the weekend on this track
// Special thanks to Notus, for testing and code review


var qualification_duration = 2000 ;
var race_laps = 15 ;
var positions = ["1st","2nd","3rd"] ; // For messages
var collectibles = 1 ; // Value is not used in any way
var time_after_race = 120 ;

//game.ships[0].set({x:264,y:327}); -start
//game.ships[0].set({x:-100,y:250}); -spawn

var vocabulary = [
      { text: "Hello", icon:"\u0045", key:"H" },
      { text: "Bye Bye!", icon:"\u0027", key:"B" },
      { text: "Yes", icon:"\u004c", key:"Y" },
      { text: "No", icon:"\u004d", key:"N" },
      
      { text: "GG", icon:"\u00a3", key:"G" },
      { text: "Overtake!", icon:"\u00bd", key:"O" },
      { text: "A'm a torpedo!", icon:"\u006a", key:"T" },
      { text: "Box,box", icon:"\u0034", key:"X" },
      
      { text: "Sorry", icon:"\u00a1", key:"S" },
      { text: "WTF", icon:"\u004b", key:"Q" },
      { text: "No Problem", icon:"\u0047", key:"P" },
      { text: "Wait", icon:"\u0046", key:"W" },      
    ] ;



var Booster_101 = '{"name":"Booster","level":1,"model":1,"size":1.15,"zoom":0.9,"designer":"Zerd","specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[200,200],"reload":[19,29]},"ship":{"mass":320,"speed":[240,240],"rotation":[70,70],"acceleration":[100,100],"dash":{"rate":2,"burst_speed":[250,250],"speed":[360,360],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"bodies":{"main1":{"section_segments":12,"offset":{"x":57,"y":-55,"z":-11},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-55,-33,-40,0,10,40,48,66,77,67],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,15,20,14,14,20,20,15,0],"height":[0,6,15,20,14,14,20,20,15,0],"propeller":true,"texture":[4,18,10,63,8,63,11,12,17]},"main2":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-55,-60,-50,-20,10,15,45,75,60],"z":[-7,-7,-5,0,0,0,0,0,0]},"width":[0,8,15,25,25,20,20,14,0],"height":[0,6,10,15,18,18,18,14,0],"propeller":true,"texture":[12,63,10,1,5,8,12,17]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-48,"z":22},"position":{"x":[0,0,0,0,0,0],"y":[-5,10,30,60],"z":[-20,-8,0,0]},"width":[5,8,12,5],"height":[4,10,10,5],"propeller":false,"texture":[7,9,4,4]},"cannons":{"section_segments":6,"offset":{"x":20,"y":30,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-60,-70,-30,0,25,30],"z":[0,0,0,0,0,0]},"width":[0,5,6,11,7,0],"height":[0,5,6,11,7,0],"angle":180,"texture":[3,8,10,63]},"cannons2":{"section_segments":6,"offset":{"x":27,"y":0,"z":-5},"position":{"x":[0,0,0,0,0,0],"y":[-70,-80,-35,0,25,30],"z":[0,0,0,0,0,0]},"width":[0,5,6,11,7,0],"height":[0,5,6,11,7,0],"angle":180,"texture":[3,8,10,63]}},"wings":{"main1":{"length":[20,20],"width":[50,30,15],"angle":[-10,-15],"position":[0,-20,-11],"doubleside":true,"offset":{"x":20,"y":-12,"z":5},"bump":{"position":35,"size":15},"texture":[11,63]},"main2":{"length":[30],"width":[33,15],"angle":[-20],"position":[0,20],"doubleside":true,"offset":{"x":65,"y":-33,"z":-9},"bump":{"position":30,"size":15},"texture":[8]}},"typespec":{"name":"Booster","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[200,200],"reload":[19,29]},"ship":{"mass":320,"speed":[240,240],"rotation":[70,70],"acceleration":[100,100],"dash":{"rate":2,"burst_speed":[250,250],"speed":[360,360],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"shape":[1.383,1.392,1.314,2.414,2.849,2.742,2.625,2.364,2.185,2.02,2.147,2.195,2.16,1.785,1.789,1.743,1.373,0.951,1.029,1.155,1.361,1.703,1.976,2.367,2.341,1.728,2.341,2.367,1.976,1.703,1.361,1.155,1.029,0.951,1.373,1.743,1.789,1.785,2.16,2.195,2.147,2.02,2.185,2.364,2.625,2.742,2.849,2.414,1.314,1.392],"lasers":[],"radius":2.849}}';
var Astral_Accelerator_102 = '{"name":"Astral Accelerator","level":1,"model":2,"size":1.25,"zoom":0.9,"designer":"Finalizer","specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[200,200],"reload":[19,29]},"ship":{"mass":260,"speed":[270,270],"rotation":[70,70],"acceleration":[70,70],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-93,-95,-90,-30,0,50,100,105],"z":[-7,-7,-7,-7,-7,-7,0,0,0]},"width":[20,23,25,27,30,27,30,26,0],"height":[0,6,8,10,15,18,8,10,0],"texture":[17,13,63,1,10,1,10,12]},"stripes":{"section_segments":16,"offset":{"x":15,"y":-40,"z":10},"position":{"x":[-4,-4,-4,11,5,0,0,0],"y":[-92,-30,0,50,100],"z":[1,6,10,3,3,0]},"width":[3,3,3,3,3,3],"height":[1,1,1,1,1],"texture":[63]},"cockpit":{"section_segments":10,"offset":{"x":0,"y":-20,"z":17},"position":{"x":[0,0,0,0,0,0],"y":[10,30,40,70,80],"z":[-2,0,0,0,0]},"width":[7.5,10,10,9.5,0],"height":[3,10,11,10,0],"texture":[9,4,13,4],"propeller":false},"detail":{"section_segments":8,"angle":3,"offset":{"x":26,"y":-50,"z":6},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,3,7,11,14,17,21,25,28,31,35,39,42,45,49,53,57],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[1,4,6,4,1,4,6,4,1,4,6,4,1,4,6,4,1],"height":[1,4,6,4,1,4,6,4,1,4,6,4,1,4,6,4,1],"texture":[4,17,17,4,4,17,17,4,4,17,17,4,4,17,17,4]},"engine":{"section_segments":4,"offset":{"x":0,"y":-95,"z":18},"position":{"x":[0,0,0,0],"y":[-18,-15,15,18],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,4,4,0],"texture":[18]},"bracings1":{"section_segments":8,"angle":90,"offset":{"x":0,"y":-85,"z":18},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-15,-14,-11.5,-10,-8,0,8,10,11.5,14,15],"z":[-20,-10,-1,1,2,0,2,1,-1,-10,-20]},"width":[4,4,4,4,4,5,4,4,4,4,4],"height":[0,10,4,3,2,3,2,3,4,10,0],"propeller":false,"texture":[13]},"bracings2":{"section_segments":8,"angle":90,"offset":{"x":0,"y":-105,"z":18},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-15,-14,-11.5,-10,-8,0,8,10,11.5,14,15],"z":[-20,-10,-1,1,2,0,2,1,-1,-10,-20]},"width":[4,4,4,4,4,5,4,4,4,4,4],"height":[0,10,4,3,2,3,2,3,4,10,0],"propeller":false,"texture":[13]},"engines":{"section_segments":12,"offset":{"x":18,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0,0,0],"y":[25,20,25,40,75,70,65],"z":[5,0,0,0,0,0,0,0]},"width":[0,5,7,8,8,6,0],"height":[0,14,15,15,13,10,0],"texture":[13,1,63,10,18,17],"propeller":true}},"wings":{"main":{"length":[46,0,25,-25,20],"width":[100,20,70,0,70,10],"angle":[10,0,110,110,-70],"position":[-30,5,-10,30,-10,20],"texture":[18,11,63],"doubleside":true,"bump":{"position":30,"size":7},"offset":{"x":0,"y":30,"z":0}},"font":{"length":[45],"width":[61,10],"angle":[-6,20],"position":[-60,-100],"texture":[63],"doubleside":true,"bump":{"position":30,"size":20},"offset":{"x":0,"y":-20,"z":5}}},"typespec":{"name":"Astral Accelerator","level":1,"model":2,"code":102,"specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[200,200],"reload":[19,29]},"ship":{"mass":260,"speed":[270,270],"rotation":[70,70],"acceleration":[70,70],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"shape":[3.381,3.427,3.347,3.319,1.604,1.401,1.135,1.113,0.925,0.929,1.193,1.178,1.174,1.202,1.246,1.32,1.423,1.583,1.787,1.895,1.784,1.76,1.984,1.971,1.909,1.625,1.909,1.971,1.984,1.76,1.784,1.895,1.787,1.583,1.423,1.32,1.246,1.202,1.175,1.178,1.193,0.929,0.925,1.113,1.135,1.401,1.604,3.319,3.347,3.427],"lasers":[],"radius":3.427}}';
var V1_103 = '{"name":"V1","designer":"Void","level":1,"model":3,"size":1.25,"zoom":0.95,"specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[200,200],"reload":[19,29]},"ship":{"mass":280,"speed":[260,260],"rotation":[70,70],"acceleration":[80,80],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":-10,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-90,-75,-20,0,50,105,90],"z":[0,0,0,0,0,0,0]},"width":[0,15,25,25,25,25,0],"height":[0,10,20,20,20,20,0],"propeller":true,"texture":[63,2,2,10,4,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-30,"z":12},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-30,10,30,40],"z":[0,0,0,0,0]},"width":[0,10,15,15,5],"height":[0,18,25,25,5],"propeller":false,"texture":9},"deco":{"section_segments":8,"offset":{"x":23,"y":20,"z":10},"position":{"x":[5,5,10,10,10,10,10],"y":[-52,-50,-20,0,20,70,65],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,15,0],"height":[0,10,10,10,10,10,0],"angle":0,"propeller":true,"texture":[4,3,4,10,4,17]},"cannons":{"section_segments":12,"offset":{"x":33,"y":40,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-40,-20,0,20,40,42],"z":[0,-5,-1,0,0,0,0]},"width":[0,5,6,10,10,7.5,0],"height":[0,5,5,5,5,5,0],"angle":0,"propeller":false,"texture":[4,4,10,4,63,4]}},"wings":{"main":{"length":[80,40],"width":[80,50,30],"angle":[0,90],"position":[30,50,80],"doubleside":true,"bump":{"position":30,"size":10},"texture":[11,63],"offset":{"x":-10,"y":0,"z":0}}},"typespec":{"name":"V1","level":1,"model":3,"code":103,"specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[200,200],"reload":[19,29]},"ship":{"mass":280,"speed":[260,260],"rotation":[70,70],"acceleration":[80,80],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"shape":[2.5,2.355,2.079,1.571,1.286,1.102,1.132,1.21,1.193,1.157,1.141,1.16,1.198,1.209,1.238,1.891,2.047,2.272,2.543,2.801,2.95,2.55,2.486,2.456,2.418,2.38,2.418,2.456,2.486,2.55,2.95,2.801,2.543,2.272,2.047,1.891,1.238,1.209,1.2,1.16,1.141,1.157,1.193,1.21,1.132,1.102,1.286,1.571,2.079,2.355],"lasers":[],"radius":2.95}}';

var RAD_Diamond_Lancer_104 = '{"name":"RAD Diamond Lancer","designer":"Uranus","level":1,"model":4,"size":1.65,"zoom":0.85,"specs":{"shield":{"capacity":[240,400],"reload":[400,400]},"generator":{"capacity":[240,240],"reload":[19,29]},"ship":{"mass":290,"speed":[250,250],"rotation":[70,70],"acceleration":[80,80],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"bodies":{"main":{"section_segments":6,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-53,-50,-40,-20,10,40,80,84],"z":[0,0,0,0,0,0,0,0]},"width":[18,25,25,23,23,25,20,0],"height":[0,5,10,10,10,10,7,0],"texture":[1,1,1,1,1,8,3.9],"angle":0},"bumper":{"section_segments":6,"offset":{"x":-1,"y":-100,"z":0},"position":{"x":[1.5,1,0,-5,-5,0,0],"y":[0,10,15,25,27],"z":[0,0,0,0,0,0,0]},"width":[5,5,5,5,0],"height":[5,5,5,5,0],"texture":[3.9,16.9,3.9],"angle":90},"cockpitWindshield":{"section_segments":3,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[-20,0,5,0,-20,0,0],"y":[-20,-10,0,10,20],"z":[-6,-2,0,-2,-6,0,0]},"width":[0,12,12,12,0],"height":[0,5,5,5,0],"texture":[8.6],"angle":90},"cockpitBack":{"section_segments":6,"offset":{"x":0,"y":10,"z":7},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-20,0,20,23],"z":[-2,0,0,0,0,0,0]},"width":[15,15,15,13,0],"height":[0,10,10,10,0],"texture":[4,10,17.9,3.9],"angle":0},"cockpitBackSides":{"section_segments":6,"offset":{"x":13,"y":0,"z":7},"position":{"x":[5,0,0,0,0,0,0],"y":[-20,-10,0,3],"z":[-3,0,0,0,0,0,0]},"width":[0,7,7,0],"height":[0,5,5,0],"texture":[4,17.5,4,3],"angle":0},"enginesTop":{"section_segments":6,"offset":{"x":12,"y":70,"z":7},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-60,-58,-55,-40,-30,-25,-20,-8,-30],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,7,7,5,5,8,6,0],"height":[0,5,7,7,5,5,8,6,0],"texture":[3.9,3.9,10.4,63,2.9,2.9,3.9,16.9],"angle":0,"propeller":true},"enginesBottom":{"section_segments":6,"offset":{"x":18,"y":65,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-55,-54,-50,-40,-30,-25,-20,-8,-30],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,7,7,5,5,8,6,0],"height":[0,5,7,7,5,5,8,6,0],"texture":[3.9,3.9,17.9,63,2.9,2.9,3.9,16.9],"angle":0,"propeller":true},"enginesConnect":{"section_segments":6,"offset":{"x":1,"y":36,"z":0},"position":{"x":[4,-12,0,0,0,0,0],"y":[-20,10],"z":[-5,8,0,0,0,0,0]},"width":[2,2],"height":[2,2],"texture":[1.9],"angle":90},"boostTank":{"section_segments":12,"offset":{"x":0,"y":-15,"z":0},"position":{"x":[-30,-30,-30,-30,-30,-30,-30,-30,-30,-30],"y":[-30,-30,-26,-20,-5,5,20,26,30,30],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,7.5,8,8,8,8,7.5,5,0],"height":[0,5,7.5,8,8,8,8,7.5,5,0],"texture":[63,63,63,13,4,13,63,63,63],"angle":0},"boostTankHolder":{"section_segments":6,"angle":90,"offset":{"x":0,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-44,-43,-39,-38,0],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,6,8,4,4],"height":[0,4,6,4,4],"texture":[4,63,4,4,4,4,4,63,4]},"boostPipeMain":{"section_segments":6,"offset":{"x":0,"y":-20,"z":11},"position":{"x":[-30,-30,-30,-30,-27,-15,-15,0,0],"y":[-20,-18,-15,30,35,45,48],"z":[-6,-2,0,0,0,0,0,0]},"width":[2,2,2,2,2,2,0],"height":[2,2,2,2,2,2,0],"texture":[63],"angle":0},"boostPipeSide":{"section_segments":6,"offset":{"x":0,"y":-20,"z":9},"position":{"x":[-34,-34,-34,-34,-36,-40,-42,-42,-42],"y":[-20,-18,-15,25,30,33,40,46],"z":[-6,-2,0,0,0,0,0,0]},"width":[2,2,2,2,2,2,2,0],"height":[2,2,2,2,2,2,2,0],"texture":[63],"angle":0},"boostTankEngineHolder":{"section_segments":6,"angle":90,"offset":{"x":0,"y":27,"z":3},"position":{"x":[0,0,0,0,10,0,0,0,0],"y":[-54,-53,-49,-48,0],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,6,8,3,3],"height":[0,4,6,3,3],"texture":[4,63,4,4,4,4,4,63,4]},"engineBoostTankOffset":{"section_segments":6,"offset":{"x":0,"y":70,"z":3},"position":{"x":[-42,-42,-42,-42,-42,-42,-42,-42,-42],"y":[-60,-58,-55,-40,-30,-25,-20,-8,-30],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,7,7,5,5,8,6,0],"height":[0,5,7,7,5,5,8,6,0],"texture":[3.9,3.9,10.4,63,2.9,2.9,3.9,16.9],"angle":0,"propeller":true},"logo1":{"section_segments":4,"offset":{"x":0,"y":-65,"z":11},"position":{"x":[0,0,0,0,0,0,0],"y":[0,5],"z":[0,0,0,0,0,0,0]},"width":[0,3.2],"height":[0,0],"texture":[4,3,4,3],"angle":0},"logo2":{"section_segments":4,"offset":{"x":0.1,"y":-65,"z":11},"position":{"x":[0,0,0,0,0,0,0],"y":[0,5],"z":[0,0,0,0,0,0,0]},"width":[0,3.2],"height":[0,0],"texture":[4,3,4,3],"angle":120},"logo3":{"section_segments":4,"offset":{"x":0.1,"y":-65,"z":11},"position":{"x":[0,0,0,0,0,0,0],"y":[5,15],"z":[0,-3,0,0,0,0,0]},"width":[3.2,0],"height":[0,0],"texture":[4],"angle":60},"logo4":{"section_segments":4,"offset":{"x":0,"y":-65,"z":11},"position":{"x":[0,0,0,0,0,0,0],"y":[5,15],"z":[0,0,0,0,0,0,0]},"width":[3.2,0],"height":[0,0],"texture":[4],"angle":180},"logoDeco":{"section_segments":4,"offset":{"x":5,"y":-72,"z":9},"position":{"x":[0,0,3,5,8,13,14,15],"y":[-20,-10,2,5,8,14,20,26],"z":[-4,0,-1,-1,-1,-2,-3,-3,0]},"width":[3,3,3,3,3,3,2,0,0],"height":[2,2,2,2,2,1,0,0],"texture":[3.9],"angle":0}},"wings":{"cockpitTop":{"doubleside":false,"offset":{"x":0,"y":-30,"z":15},"length":[10,13],"width":[30,20,4],"angle":[-11,-42],"position":[0,0,11],"texture":[11.5,9],"bump":{"position":20,"size":3}},"cockpitTopBack":{"doubleside":false,"offset":{"x":0,"y":-17,"z":14.8},"length":[10,13],"width":[10,10,20],"angle":[-11,-42],"position":[0,0,10],"texture":[4],"bump":{"position":20,"size":3}},"wingsBackTop":{"doubleside":true,"offset":{"x":14,"y":37,"z":10},"length":[20],"width":[20,7],"angle":[20],"position":[0,20],"texture":[63],"bump":{"position":20,"size":5}},"wingsBackBottom":{"doubleside":true,"offset":{"x":20,"y":31,"z":-8},"length":[30],"width":[16,4],"angle":[-25],"position":[0,20],"texture":[63],"bump":{"position":20,"size":5}}},"typespec":{"name":"RAD Diamond Lancer","level":1,"model":4,"code":104,"specs":{"shield":{"capacity":[240,400],"reload":[400,400]},"generator":{"capacity":[240,240],"reload":[19,29]},"ship":{"mass":290,"speed":[250,250],"rotation":[70,70],"acceleration":[80,80],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"shape":[3.493,3.489,3.414,2.127,1.537,1.249,1.073,0.95,0.868,0.811,0.761,0.718,0.692,0.679,0.68,0.698,0.867,0.98,1.087,2.342,2.136,2.271,2.034,2.123,2.083,1.496,2.083,2.123,2.034,2.422,2.571,2.473,2.097,2.046,2.016,1.704,1.561,1.264,1.264,1.474,1.546,1.568,1.548,1.717,1.861,1.881,1.759,2.127,3.414,3.489],"lasers":[],"radius":3.493}}';
var Vengar_105 = '{"name":"Vengar","designer":"SChickenman","level":1,"model":5,"size":1.35,"zoom":1.02,"specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[200,200],"reload":[19,29]},"ship":{"mass":270,"speed":[240,240],"rotation":[95,95],"acceleration":[105,105],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-72,-70,-45,-25,-10,20,30,45,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,13,15,15,10,7,0],"height":[0,5,10,13,15,15,10,7,0],"texture":[3,3,63,63,3,11,63,3],"propeller":true},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-15,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,20,45],"z":[0,0,0,10,5,10]},"width":[0,5,8,8,0],"height":[0,5,8,8,0],"texture":[3,3,9,3,3]},"cannon":{"section_segments":12,"offset":{"x":0,"y":-15,"z":-20},"position":{"x":[0,0,0,0,0,0],"y":[-75,-80,-20,0,20,60],"z":[0,0,0,-5,0,20]},"width":[0,10,15,40,35,0],"height":[0,7,10,10,10,0],"angle":0,"propeller":false,"texture":[6,4,4,3]},"cannons2":{"section_segments":12,"offset":{"x":40,"y":70,"z":0},"position":{"x":[0,0,0,0,0],"y":[-30,-20,0,20,30],"z":[0,0,0,0,0]},"width":[2,5,7,10,3],"height":[2,5,7,10,3],"texture":[6,4,63,4],"propeller":true,"angle":0},"propulsors":{"section_segments":8,"offset":{"x":60,"y":-50,"z":-25},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[30,55,60,80,95,100,90,95],"z":[0,0,0,0,0,0,0,0]},"width":[7,9,9,5,7,5,0],"height":[1,9,9,5,7,5,0],"texture":[4,63,4,11,63,12],"propeller":true}},"wings":{"wings1":{"doubleside":true,"offset":{"x":0,"y":20,"z":13},"length":[-20,-10,-40],"width":[50,50,130,30],"angle":[100,-20,10],"position":[0,0,-50,0],"texture":[4,4,8,4],"bump":{"position":10,"size":-10}},"join":{"doubleside":true,"offset":{"x":0,"y":10,"z":0},"length":[70],"width":[50,30],"angle":[-20],"position":[0,0,0,50],"texture":63,"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":30,"z":-3},"length":[40],"width":[90,30],"angle":[10],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Vengar","level":1,"model":5,"code":105,"specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[200,200],"reload":[19,29]},"ship":{"mass":270,"speed":[240,240],"rotation":[95,95],"acceleration":[105,105],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[50,50],"energy":[100,100]}}},"shape":[2.57,2.579,2.034,1.705,1.493,1.345,1.237,1.164,1.121,1.14,1.888,1.874,1.852,1.878,1.882,1.91,2.028,2.198,2.214,1.927,2.406,2.88,2.939,1.663,1.23,1.217,1.23,1.663,2.939,2.88,2.406,1.927,2.214,2.198,2.028,1.91,1.882,1.878,1.852,1.874,1.888,1.14,1.121,1.164,1.237,1.345,1.493,1.705,2.034,2.579],"lasers":[],"radius":2.939}}';

var Space_Phantom_106 = '{"name":"Space Phantom","level":1,"model":6,"size":0.8,"designer":"Goldman","zoom":1.12,"specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[300,300],"reload":[19,29]},"ship":{"mass":245,"speed":[240,240],"rotation":[80,80],"acceleration":[85,85],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[60,60],"energy":[100,100]}}},"bodies":{"detail1":{"section_segments":[45,135,225,-90,315],"offset":{"x":0,"y":-50,"z":0},"position":{"x":[1,1,1,1,1,1,1,18,23,27,32,32],"y":[-80,-80,-65,-55,-45,-30,20,40,50,60,70,70],"z":[-13,-13,-7,-2,0,0,0,-1,-2,-5,-8,-8]},"width":[0,12,25,27,27,25,25,10,7,6,3,0],"height":[0,3,9,12,11,11,11,11,8,6,3,0],"texture":[1,1,1,1,1,1,1,1,63],"propeller":false,"vertical":false,"angle":0},"detail2":{"section_segments":[45,90,135,225,315],"offset":{"x":0,"y":-50,"z":0},"position":{"x":[-1,-1,-1,-1,-1,-1,-1,-18,-23,-27,-32,-32],"y":[-80,-80,-65,-55,-45,-30,20,40,50,60,70,70],"z":[-13,-13,-7,-2,0,0,0,-1,-2,-5,-8,-8]},"width":[0,12,25,27,27,25,25,10,7,6,3,0],"height":[0,3,9,12,11,11,11,11,8,6,3,0],"texture":[1,1,1,1,1,1,1,1,63],"propeller":false,"vertical":false,"angle":0},"detail3":{"section_segments":[20,60,100,140,180,220,260,300,340,20],"offset":{"x":0,"y":-15,"z":122},"position":{"x":[0,0,0,0,0,0],"y":[-8,-8,-4,2,5,5],"z":[0,0,0,0,-3,-3]},"width":[0,23,23,20,10,0],"height":[0,40,40,35,15,0],"texture":[1,1,63,4],"propeller":false,"vertical":true,"angle":0},"detail4":{"section_segments":[45,135,225,315],"offset":{"x":1,"y":-50,"z":-12},"position":{"x":[0,0,0,0,0,0,0,0,0,20,29,29],"y":[-79,-79,-65,-50,-35,-25,-15,-5,15,42,65,65],"z":[-6,-6,-6,-1,0,0,0,-2,-3.5,2,2,2]},"width":[0,13,31,33,30,26,26,30,32,5,3,0],"height":[0,4,10,22,22,22,25,25,25,15,3,0],"texture":[4],"propeller":false,"vertical":false,"angle":0},"detail5":{"section_segments":[45,90,135,225,315],"offset":{"x":0,"y":40,"z":-10},"position":{"x":[0,0,-2,0,0,0],"y":[-60,-60,-20,15,50,50],"z":[0,0,0,0,0,0]},"width":[0,21,26,20,18,0],"height":[0,24,13,12,12,0],"texture":[4,4,4,11.1,4],"propeller":false,"vertical":false,"angle":0},"detail6":{"section_segments":[45,90,135,225,315],"offset":{"x":0,"y":40,"z":-10},"position":{"x":[0,0,0,-2,0,0],"y":[-50,-50,-15,20,60,60],"z":[0,0,0,0,0,0]},"width":[0,18,20,26,21,0],"height":[0,12,12,13,24,0],"texture":[4,11.1,4,4,4],"propeller":false,"vertical":false,"angle":180},"detail7":{"section_segments":6,"offset":{"x":1,"y":-100,"z":9},"position":{"x":[-1,-1,-1,-1,-1,13,14,13,13],"y":[-50,-50,-35,-15,5,20,50,70,70],"z":[-25,-25,-23,-9,-2,0,0,-3,-3]},"width":[0,7,15,20,22,6,3,2,0],"height":[0,2,15,12,8,2,2,2,0],"texture":[9,9,9,9,7,4],"propeller":false,"vertical":false,"angle":0},"detail8":{"section_segments":8,"offset":{"x":40,"y":100,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-50,-40,-10,40,50,40,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,12,15,15,15,12,5,0],"height":[0,12,15,15,15,12,5,0],"texture":[4,4,15,4,4,17],"propeller":true,"vertical":false,"angle":0},"detail9":{"section_segments":[45,135,225,315],"offset":{"x":55,"y":-15,"z":-85},"position":{"x":[-7,-7,-3,0,0,-7,-7],"y":[-12,-12,-9,-6,1.5,15,15],"z":[0,0,0,-2,-25,-35,-45]},"width":[0,4,4,4,4,4,0],"height":[0,44,48,49,20,16,0],"texture":[1],"propeller":false,"vertical":true,"angle":0},"detail10":{"section_segments":6,"offset":{"x":49,"y":45,"z":-18},"position":{"x":[-3,-3,0,0,0,0],"y":[-25,-25,-20,20,25,25],"z":[0,0,0,0,0,0]},"width":[0,5,8,8,5,0],"height":[0,5,8,8,5,0],"texture":[1,1,63,1],"propeller":false,"vertical":false,"angle":0},"detail11":{"section_segments":[45,135,225,315],"offset":{"x":45,"y":-15,"z":-18},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,-41,-40,-28,40,40],"z":[0,0,0,0,0,0,0]},"width":[0,2,2,3.5,3.5,3.5,0],"height":[0,2,2,3.5,3.5,3.5,0],"texture":[4,4,4,8,4],"propeller":false,"vertical":false,"angle":0},"detail12":{"section_segments":6,"offset":{"x":0,"y":95,"z":-50},"position":{"x":[0,0,0,-40,-55,-55],"y":[45,45,55,95,110,110],"z":[24,24,24,0,-8,-8]},"width":[0,35,35,23,18,0],"height":[0,6,6,3,2,0],"texture":[0.2,0.2,0.2,63],"propeller":false,"vertical":false,"angle":90},"detail13":{"section_segments":6,"offset":{"x":0,"y":95,"z":-50},"position":{"x":[0,0,0,40,55,55],"y":[45,45,55,95,110,110],"z":[24,24,24,0,-8,-8]},"width":[0,35,35,23,18,0],"height":[0,6,6,3,2,0],"texture":[0.2,0.2,0.2,63],"propeller":false,"vertical":false,"angle":-90},"detail14":{"section_segments":[20,60,100,140,180,220,260,300,340,20],"offset":{"x":0,"y":0,"z":-110},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-6,-6,-4,2,5,-2,-2,-2],"z":[0,0,0,0,-3,-3,-3,-3,-3]},"width":[0,40,40,35,20,25,16,0],"height":[0,40,40,35,20,25,16,0],"texture":[0.9,0.9,63,0.9,3.9,16.9,3.9],"propeller":false,"vertical":true,"angle":0},"detail15":{"section_segments":6,"offset":{"x":0,"y":140,"z":-18},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-50,-8,15,30,20,20],"z":[0,0,0,0,0,0,0]},"width":[0,25,25,25,18,8,0],"height":[0,16,15,15,12,5,0],"texture":[3.9,3.9,12.9,3.9,16.9],"propeller":true,"vertical":false,"angle":0},"detail16":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-63,"z":4},"position":{"x":[0,0,0,0,0],"y":[-25,-25,-20,30,30],"z":[0,0,0,0,0]},"width":[0,17,17,17,0],"height":[0,6,6,6,0],"texture":[1,1,10.4444,1],"propeller":false,"vertical":false,"angle":0},"detail17":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":10,"z":3},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-30,-20,30,40,70,70],"z":[0,0,0,-8,-8,-8,-8]},"width":[0,12,17,17,10,10,0],"height":[0,6,6,12,6,6,0],"texture":[3,3,8,63,15,3],"propeller":false,"vertical":false,"angle":0},"detail18":{"section_segments":6,"offset":{"x":58,"y":100,"z":-29},"position":{"x":[0,0,0,0,0,0],"y":[-35,-35,-30,30,35,35],"z":[0,0,0,0,0,0]},"width":[0,5,8,8,5,0],"height":[0,5,8,8,5,0],"texture":[3.9,3.9,11,3.9,3.9],"propeller":false,"vertical":false,"angle":0},"detail19":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":-150,"z":-20},"position":{"x":[0,0,0,0,0,0],"y":[-10,-10,-13,-10,15,15],"z":[0,0,0,0,0,0]},"width":[0,5,7,10,10,0],"height":[0,1,2,4,4,0],"texture":[4,4,1,15],"propeller":false,"vertical":false,"angle":0}},"typespec":{"name":"Space Phantom","level":1,"model":6,"code":106,"specs":{"shield":{"capacity":[200,400],"reload":[400,400]},"generator":{"capacity":[300,300],"reload":[19,29]},"ship":{"mass":245,"speed":[240,240],"rotation":[80,80],"acceleration":[85,85],"dash":{"rate":2,"burst_speed":[250,250],"speed":[300,300],"acceleration":[70,70],"initial_energy":[60,60],"energy":[100,100]}}},"shape":[2.609,2.511,1.935,1.346,0.973,1.163,1.164,1.042,0.936,0.866,0.815,0.782,0.765,0.766,0.784,0.814,1.02,1.106,1.267,2.254,3.181,3.016,2.54,2.523,2.731,2.725,2.731,2.523,2.54,3.016,3.181,2.254,1.267,1.106,1.02,0.814,0.784,0.766,0.765,0.782,0.815,0.866,0.936,1.042,1.164,1.163,0.973,1.346,1.935,2.511],"lasers":[],"radius":3.181}}';
//All ships were balanced by comparison with the classic racing, 
//here the balance is used, relevant at the time of the weekend on this track


var track1 = {
  map: ""+
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //1
"99999999999999999999999              9999999999999999999999999999999999999999999\n"+ //2
"99999                         999                  R              99999999999999\n"+ //3
"99  R                  999999999999999  TR         R           RT    99999999999\n"+ //4
"9   999  99999999999999999 L    9999999            R                 99999999999\n"+ //5
"9     99           Q       L999 9999999999999999999999999999999999   99999999999\n"+ //6
"99     999999999999999999999999U9999999999999999999999999999999999        999999\n"+ //7
"9999       L  B B B B B B  L    9999999999999999999999999999999999999      99999\n"+ //8
"999999     L I             L    99999999999999999999999999999999999999     99999\n"+ //9
"999999999  L   B B B B B B L    9999999999999999         9999999999999     99999\n"+    //10
"99999999999999999999999999999    999999999999               9999999999     99999\n"+ //11
"99999999999999999999999999999        99999999                999999999     99999\n"+ //12
"99999999999999999999999   999U999     999999        99999    999999999DDDDD99999\n"+ //13
"99999999999999999999999   99UU999     99999        999999    99999999      99999\n"+ //14
"99999999999999999999999-------9999UUUUU99999       999999     999999      999999\n"+ //15
"999999999999    99    L-------9999     99999        99999       999      9999999\n"+ //16
"999999999999          9D9999999999  H  999999        9999999     L     999999999\n"+ //17
"999999999999          9R    999999  U  99999999DDDDDD99999999    L    9999999999\n"+ //18
"999999999999    99    9R    99999     99999999999     99999999999999999999999999\n"+ //19
"99999999999999999999999R    9999     9999999999999     9999999999999999999999999\n"+    //20
"999999999999999999999999    9999     99999999999999     999999999999999999999999\n"+ //21
"99999999999999999999999999999999     99999999999999     999999999999999999999999\n"+ //22
"999999999999999999999999999999999UUUU99999999999999     999999999999999999999999\n"+ //23
"9999999999999999999999999999999999     999999999999     999999999999999999999999\n"+ //24
"9999999999999999999999999999999999      999999999     99999999999999999999999999\n"+ //25
"99999999999999999999999999999999999      9999       9999999999999999999999999999\n"+ //26
"999999999999999999999999999999999999     9999    9999999999999999999999999999999\n"+ //27
"99999999999999999999999999999999999  H  99999    9999999999999999999999999999999\n"+ //28
"9999999999999999999999999999999999      99999DDDD9999999999999999999999999999999\n"+ //29
"9999999999999999999999999999999999     999999    9999999999999999999999999999999\n"+    //30
"999999999999999999999999999999999UUUU99999999    9999999999999999999999999999999\n"+ //31
"99999999999999999999999999999999     9999999     9999999999999999999999999999999\n"+ //32
"99999999999999999999999999999999                99999999999999999999999999999999\n"+ //33
"9999999999999999999999999999999999           99999999999999999999999999999999999\n"+ //34
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //35
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //36
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //37
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //38
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //39
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+    //40
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //41
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //42
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //43
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //44
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //45
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //46
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //47
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //48
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //49
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+    //50
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //51
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //52
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //53
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //54
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //55
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //56
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //57
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //58
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //59
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+    //60
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //61
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //62
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //63
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //64
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //65
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //66
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //67
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //68
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //69
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+    //70
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //71
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //72
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //73
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //74
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //75
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //76
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //77
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //78
"99999999999999999999999999999999999999999999999999999999999999999999999999999999\n"+ //79
"99999999999999999999999999999999999999999999999999999999999999999999999999999999",      //80


checkpoints: [
  {x:-264,y:327,direction:180,width:60}, // Start/ finish line
  {x:215,y:371,direction:0,width:60}, // the 1st third end of track (2nd sector beginning)
  {x:0,y:70,direction:180,width:60} // the 2nd third end of track (3rd sector beginning)
 ]
} ;

var tracks = [track1] ;
var current_track = 0 ;

var map = tracks[current_track].map ;
var checkpoints = tracks[current_track].checkpoints ;
var map_lines = map.split("\n");

var setTrack = function(game,trackid) {
  var track = tracks[trackid];
  map = track.map ;
  map_lines = map.split("\n");
  checkpoints = track.checkpoints ;
  game.removeObject() ;
  addObjects(game) ;
  game.setCustomMap(map);
}

var scoreboard = {
  id:"scoreboard",
  visible: true,
  components: [
    { type:"box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
    { type: "text",position: [0,0,100,100],color: "#FFF",value: "My Text"}
  ]
} ;

var lap_info = {
  id:"lap_info",
  visible: true,
  position: [30,90,40,5],
  components: [
    { type: "text",position: [0,0,100,100],color: "#FFF",value: "Race for fastest lap"}
  ]
} ;

var race_info = {
  id:"race_info",
  visible: true,
  position: [30,5,40,5],
  components: [
    { type: "text",position: [0,0,100,100],color: "#FFF",value: "Qualification"}
  ]
};

var countdown = {
  id:"race_info",
  visible: true,
  position: [40,5,20,10],
  components: [
    { type: "text",position: [0,0,100,100],color: "#FFF",value: "5"}
  ]
};


// Track background, can be used on map pattern with shortcut:
var PitLane = {
  id: "PitLane",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/pitlaneNEW.png"
} ;

var DRSMirror = {
  id: "DRSMirror",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/drsPS.png"

};

var DRSHoriz = {
  id: "DRSHooriz",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/drsPS.png"

};

var DRSZone = {
  id: "DRSZone",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/drsPS.png"

} ;

var startline = {
  id: "startline",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://starblast.data.neuronality.com/mods/objects/startline.png"
} ;

var startblock = {
  id: "startblock",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://starblast.data.neuronality.com/mods/objects/startblock.png"
} ;


var arrow = {
  id: "arrow",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://starblast.data.neuronality.com/mods/objects/arrow.png"
} ;


// Track info:
var Salute = {
  id: "Salute",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/HELLo.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/HELLo.png"
} ;

game.setObject({
  id: "Salute",
  type: Salute,
  position: {x:-156,y:266,z:-2.5},
  scale: {x:30,y:30,z:36},
  rotation: {x:600,y:0,z:0}
}) ;

var ShipsGallery = {
  id: "ShipsGallery",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/racingships.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/racingships.png"
} ;

game.setObject({
  id: "ShipsGallery",
  type: ShipsGallery,
  position: {x:-140,y:210,z:-2.5},
  scale: {x:39,y:39,z:36},
  rotation: {x:600,y:0,z:0}
}) ;

var AboutMod = {
  id: "AboutMod",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/aboutmod.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/aboutmod.png"
} ;

game.setObject({
  id: "AboutMod",
  type: AboutMod,
  position: {x:-200,y:229,z:-2.5},
  scale: {x:39,y:39,z:36},
  rotation: {x:600,y:0,z:0}
}) ;

var TrackInfo = {
  id: "TrackInfo",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/abouttrack.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/abouttrack.png"
} ;

game.setObject({
  id: "TrackInfo",
  type: TrackInfo,
  position: {x:-260,y:230,z:-2.5},
  scale: {x:39,y:39,z:36},
  rotation: {x:600,y:0,z:0}
}) ;


var RacingLogo = {
  id: "RacingLogo",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/RacingLOGO.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/RacingLOGO.png"
} ;

game.setObject({
  id: "RacingLogo",
  type: RacingLogo,
  position: {x:-95,y:309,z:-2.5},
  scale: {x:19,y:19,z:36},
  rotation: {x:600,y:0,z:0}
}) ;


var RacingLogoSector2 = {
  id: "RacingLogoSector2",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/RacingLOGO.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/RacingLOGO.png"
} ;

game.setObject({
  id: "RacingLogoSector2",
  type: RacingLogo,
  position: {x:274,y:348,z:-2.5},
  scale: {x:19,y:19,z:36},
  rotation: {x:600,y:0,z:0}
}) ;

var RacingLogoSector3 = {
  id: "RacingLogoSector3",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/RacingLOGO.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/RacingLOGO.png"
} ;

game.setObject({
  id: "RacingLogoSector3", // start of sector 3
  type: RacingLogoSector3,
  position: {x:0,y:70,z:-2.5},
  scale: {x:19,y:19,z:36},
  rotation: {x:600,y:0,z:0}
}) ;



var SpawnAndSwitch = {
  id: "SpawnAndSwitch",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/spawnandswitch.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/spawnandswitch.png"
} ;

game.setObject({
  id: "SpawnAndSwitch", 
  type: SpawnAndSwitch,
  position: {x:-110,y:250,z:-2.5},
  scale: {x:20,y:20,z:36},
  rotation: {x:600,y:0,z:0}
}) ;

/*

Bad trying:P

var brick = {
  id: "brick",
  obj: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/brick.obj",
  diffuse: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/block.png",
  emissive: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/block.png",
  bump: "https://raw.githubusercontent.com/mrGoldmanus/RACING-/master/block.png",
  shininess: 0,
  emissiveColor: 0x00CCFF,
  specularColor: 0x4080FF,
  transparent: false,
  bumpScale: 1,
  physics: {
    mass: 350,
    shape: [1.475,1.495,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.624,0.684,0.77,0.877,0.865,0.795,0.75,0.721,0.705,0.705,0.721,0.751,0.799,0.862,0.96,1.096,1.305,1.63,1.626,1.545,1.498],
    fixed: true
  }
} ;

for (var i=0;i<1;i++)
{
  for (var j=0;j<1;j++)
  {
  game.setObject({
    id:"brick",
    type:brick,
    position:{x:-377,y:269,z:-4},
    scale:{x:8.5,y:8.5,z:8.5},
    rotation: {x:90,y:0,z:0},
    bumpScale: 1
  }) ;

  }
}
*/



var change_button = {
  id: "change",
  position: [6,30,8,14],
  clickable: true,
  shortcut: "E",
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#CDE",width:2},
    { type: "text",position:[10,35,80,30],value:"Switch",color:"#CDE"},
    { type: "text",position:[20,70,60,20],value:"[E]",color:"#CDE"}
  ],
};

var change_button_hidden = {
  id: "change",
  position: [0,0,0,0],
  clickable: false,
  visible: false,
  components: [],
};

var s = 6;

var map_size = 80 ;



var addObjects = function(game) {
  for (var y=0;y<map_lines.length;y++)
  {
    var line = map_lines[y];

    for (var x=0;x<line.length;x++)
    {
      var px =  (x+.5-map_size/2)*10 ;
      var py =  (map_size-y-1+.5-map_size/2)*10 ;

      switch (line.charAt(x))
      {
        case "R":
          game.setObject({id: "R"+px+":"+py,
            type:arrow,
            position: {x:px,y:py,z:-2},
            scale: {x:6,y:6,z:6},
            rotation: {x:0,y:0,z:Math.PI/2}
          });
          break ;
        case "U":
         game.setObject({id: "U"+px+":"+py,
            type:arrow,
            position: {x:px,y:py,z:-2},
            scale: {x:6,y:6,z:6},
            rotation: {x:0,y:0,z:Math.PI}
          });
          break ;
        case "L":
         game.setObject({id: "L"+px+":"+py,
            type:arrow,
            position: {x:px,y:py,z:-2},
            scale: {x:6,y:6,z:6},
            rotation: {x:0,y:0,z:Math.PI*1.5}
          });
          break ;
        case "D":
          game.setObject({id: "D"+px+":"+py,
            type:arrow,
            position: {x:px,y:py,z:-2},
            scale: {x:6,y:6,z:6},
            rotation: {x:0,y:0,z:0}
          });
          break ;
        case "I":
          game.setObject({id: "I"+px+":"+py,
            type:startline,
            position: {x:px,y:py,z:-2},
            scale: {x:30,y:30,z:30},
            rotation: {x:0,y:0,z:Math.PI*1.5}
          });
          break ;
        case "B":
          game.setObject({id: "B"+px+":"+py,
            type:startblock,
            position: {x:px,y:py,z:-2},
            scale: {x:6,y:6,z:6},
            rotation: {x:0,y:0,z:Math.PI*.5}
          });
          break ;
        case "T":
          game.setObject({id: "T"+px+":"+py,
            type: DRSZone,
            position: {x:px,y:py,z:-2},
            scale: {x:26,y:19,z:26},
            rotation: {x:600,y:0,z:Math.PI*.5}
          });
          break ;
        case "H":
          game.setObject({id: "H"+px+":"+py,
            type: DRSHoriz,
            position: {x:px,y:py,z:-2},
            scale: {x:26,y:19,z:26},
            rotation: {x:600,y:0,z:0}
          });
          break ;
        case "M":
          game.setObject({id: "M"+px+":"+py,
            type: DRSMirror,
            position: {x:px,y:py,z:-2},
            scale: {x:26,y:19,z:26},
            rotation: {x:600,y:0,z:300}
          });
          break ;
        case "Q":
          game.setObject({id: "Q"+px+":"+py,
            type: PitLane,
            position: {x:px,y:py,z:-2},
            scale: {x:26,y:19,z:26},
            rotation: {x:600,y:0,z:0}
          });
          break ;
      }
    }
  }
} ;

addObjects(game);




this.options = {
  map_size: 80,
  weapons_store: false,
  radar_zoom: 2,
  crystal_value: 0,
  ships: [Booster_101,Astral_Accelerator_102,V1_103,RAD_Diamond_Lancer_104,Vengar_105,Space_Phantom_106],
  choose_ship:[101,102,103,104,105,106],
  asteroids_strength: 5,
  starting_ship: 101,
  auto_refill: false,
  map_name: "SPAce GP/ 2nd track SRC test",
  projectile_speed: 1,
  starting_ship_maxed: true,
  power_regen_factor: 0,
  custom_map: map,
  invulnerable_ships: true,
  max_players: 12,
  mines_destroy_delay: 60*6,
  soundtrack: "crystals.mp3",
  vocabulary: vocabulary
};

// Not in use:
var popCollectible = function(game) {

  var choice = [10,11,10,11,20,21,90,90,90,90,90,90,90];
  var code = choice[Math.floor(Math.random()*choice.length)];

  var x = Math.floor(Math.random()*game.options.map_size);
  var y = Math.floor(Math.random()*game.options.map_size);
  if (map_lines[y].substring(x,x+1)==" ")
  {
    x = (x+.5-game.options.map_size/2)*10 ;
    y = (game.options.map_size-y-1+.5-game.options.map_size/2)*10 ;

  }
} ; 

var formatLapTime = function(time) {
  if (time>10000)
  {
    return "-" ;
  }
 time = Math.round(time*1000) ;
 var cents = time%1000 ;
 var seconds = Math.floor(time/1000)%60;
 var minutes = Math.floor(time/60000) ;
 if (cents<10) cents = "0"+cents;
 if (cents<100) cents = "0"+cents;
 if (seconds<10) seconds = "0"+seconds;
 return minutes+":"+seconds+":"+cents ;
}

var formatMinutesSeconds = function(time) {
 var seconds = time%60;
 var minutes = Math.floor(time/60) ;
 if (seconds<10) seconds = "0"+seconds;
 return minutes+":"+seconds ;
}

// Instant instructor:
instructor = function(message, time = 10, character = "Lucina") {
  for (var ship of game.ships) {
    ship.instructorSays(message, character);
  }
  setTimeout(function() {
    for (var ship of game.ships) {
      ship.hideInstructor();
    }
  }, time * 1500);
};  

// Welcome message:
var checkShip = function(ship) { 
  if (!ship.custom.instructor_hidden) {
    if (!ship.custom.instructor_said) {
      ship.custom.instructor_said = true;
      ship.custom.instructor_hide_step = game.step + 2100;
      ship.instructorSays("Hey dear modder:)", "Zoltar");
    } else if (game.step >= ship.custom.instructor_hide_step) {
      ship.custom.instructor_hidden = true;
      ship.hideInstructor();
    }           
  }  
  
  
  if (ship.custom.current_checkpoint == null)
  {
    ship.custom.current_checkpoint = 0 ;
    ship.custom.checkpoint_count = 0 ;
    ship.custom.lap_count = 0 ;
    ship.custom.checkpoint_time = 0 ;
    ship.custom.best_lap = 100000 ;
    if (ship.game.custom.status == "qualification")
    {
      race_info.components[0].value = "";
      race_info.visible = true ;
      game.setUIComponent(race_info);
    }
    ship.setUIComponent(change_button);
  }
  
  
  if (checkCheckPoint(ship,checkpoints[ship.custom.current_checkpoint]))
  {
    if (ship.game.custom.status != "qualification" && ship.custom.lap_count>race_laps)
    {
    }
    else
    {
      if (checkpoint_times[ship.custom.checkpoint_count] == null)
      {
        checkpoint_times[ship.custom.checkpoint_count] = ship.game.step/60 ;
        ship.custom.checkpoint_delta = 0 ;
      }
      else
      {
        ship.custom.checkpoint_delta = Math.round(ship.game.step/60-checkpoint_times[ship.custom.checkpoint_count]) ;
      }
      ship.custom.checkpoint_count++ ;
      ship.custom.checkpoint_time = ship.game.step/60/3600 ;
    }
    if (ship.custom.current_checkpoint == 0)
    {
      ship.custom.lap_count++ ;
      if (ship.custom.lap_start != null)
      {
        var time = (game.step-ship.custom.lap_start-1+extra_bit)/60 ;
        if (ship.custom.best_lap == null || time<ship.custom.best_lap)
        {
          ship.custom.best_lap = time ;
          if (ship.game.custom.status != "race_end")
          {
            lap_info.components[0].value = "Best lap! "+ formatLapTime(time) ;
            ship.setUIComponent(lap_info);
          }
        }
        else
        {
          if (ship.game.custom.status != "race_end")
          {
            lap_info.components[0].value = "Lap time: "+ formatLapTime(time) ;
            ship.setUIComponent(lap_info);
          }
        }
      }
      ship.custom.lap_start = game.step-1+extra_bit ;
    }
    ship.custom.current_checkpoint = (ship.custom.current_checkpoint+1)%checkpoints.length;
  }

  if (ship.custom.lap_start != null)
  {
    var seconds = Math.floor((ship.game.step-ship.custom.lap_start-1+extra_bit)/60) ;
    if ((seconds>=5 || ship.custom.best_lap>10000) && seconds != ship.custom.seconds && ship.game.custom.status != "race_end")
    {
      ship.custom.seconds = seconds ;
      var minutes = Math.floor(seconds/60);
      seconds = seconds%60 ;
      if (seconds<10) seconds = "0"+seconds;
      lap_info.components[0].value = minutes+":"+seconds ;
      ship.setUIComponent(lap_info);
    }
  }
  else if (ship.game.custom.status == "qualification")
  {
    if (ship.custom.seconds != "Race for fastest lap")
    {
      ship.custom.seconds = "Race for fastest lap" ;
      lap_info.components[0].value = "Race for fastest lap" ;
      ship.setUIComponent(lap_info);
    }
  }
}

createCheckPoint = function() {
  var x = game.ships[0].x;
  var y = game.ships[0].y;
  var direction = game.ships[0].r;
  echo("{x:"+x+",y:"+y+",direction:"+direction+"}");
}

var extra_bit = 0 ;
var checkpoint_times = [] ;

var checkCheckPoint = function(ship,checkpoint) {
  var vx = Math.cos(checkpoint.direction);
  var vy = Math.sin(checkpoint.direction);
  var dx = ship.x-checkpoint.x;
  var dy = ship.y-checkpoint.y;
  var d = Math.sqrt(dx*dx+dy*dy);
  //echo(ship.y);
  var passed = false ;
  if (d<checkpoint.width)
  {
    var projection = vx*dx+vy*dy;
    //echo(projection);
    if (ship.custom.projection != null)
    {
      if (ship.custom.projection<0 && projection>=0)
      {
        passed = true ;
        extra_bit = (0-ship.custom.projection)/(projection-ship.custom.projection);
      }
    }
    ship.custom.projection = projection ;
  }
  return passed ;
}

var updateScoreboard = function(game) {
  scoreboard.components = [] ;
  var line = 0 ;
  if (game.custom.status == "qualification")
  {
    scoreboard.components.push({ type: "text",position: [0,line*10+1,100,8],color: "#FFF",value: "Qualification "+formatMinutesSeconds(game.custom.qualification_time)});
    line++ ;
  }
  else
  {
    scoreboard.components.push({ type: "text",position: [0,line*10+1,100,8],color: "#FFF",value: "Race" });
    line++ ;
  }
  for (var i=0;i<game.ships.length;i++)
  {
    var ship = game.ships[i];
    if (ship.custom.best_lap == null)
    {
      ship.custom.best_lap = 1000000 ;
    }
  }

  if (game.custom.status == "qualification")
  {
    game.ships.sort(function(a,b) { return a.custom.best_lap-b.custom.best_lap}) ;
  }
  else
  {
    game.ships.sort(function(a,b) {
      return (b.custom.checkpoint_count*1000-b.custom.checkpoint_time)-(a.custom.checkpoint_count*1000-a.custom.checkpoint_time);
    }) ;
  }

  var score = 10 ;
  var delta = 0 ;

  for (var i=0;i<game.ships.length;i++)
  {
    var ship = game.ships[i];
    if (ship.score != score)
    {
      ship.set({score:score});
    }
    score = Math.max(0,score-1);
  }

  for (var i=0;i<game.ships.length;i++)
  {
    if (line>=10)
    {
      break ;
    }
    var ship = game.ships[i];
    if (game.custom.status != "qualification")
    {
      if (game.custom.status != "race_end" || ship.custom.lap_count>race_laps)
      {
        scoreboard.components.push({ type: "text", position: [0,line*10+1,14,8],color: "#FFF",align:"right",value:line+"."});
      }
      scoreboard.components.push({ type: "player",id: ship.id, position: [15,line*10+1.5,85,7],color: "#FFF",align:"left"});
      if (ship.custom.checkpoint_delta != null && ship.custom.checkpoint_delta>delta)
      {
        delta = ship.custom.checkpoint_delta ;
        scoreboard.components.push({ type: "text",position: [80,line*10+1,18,8],color: "#FFF",value: "+"+delta+"''",align:"right"});
      }
    }
    else
    {
      scoreboard.components.push({ type: "player",id: ship.id, position: [0,line*10+1.5,60,7],color: "#FFF",align:"left"});
      if (ship.custom.best_lap != null)
      {
        scoreboard.components.push({ type: "text",position: [60,line*10+1,38,8],color: "#FFF",value: formatLapTime(ship.custom.best_lap),align:"right"});
      }
    }
    line += 1 ;
  }
} ;

var updateShipInfo = function(ship) { 
  if (ship.x > -120 && ship.x < -100 && ship.y > 240 && ship.y < 260) {
    if (!ship.custom.button_visible) {
      ship.setUIComponent(change_button);
      ship.custom.button_visible = true; 
    }
  } else if (ship.custom.button_visible) {
    ship.setUIComponent(change_button_hidden);
    ship.custom.button_visible = false; // Hide Switch button in any conditions
  }
} ;

// game steps:
var manageGame = function(game,second) {
  if (game.custom.status == null)
  {
    game.custom.status = "qualification" ;
    game.custom.status_time = second+qualification_duration ;
    var t = game.custom.status_time-second ;
    game.custom.qualification_time = t ;
  }
  switch (game.custom.status)
  {
    case "qualification":
      var t = Math.max(0,game.custom.status_time-second) ;
      game.custom.qualification_time = t ;
      if (t == 0)
      {
        game.custom.status = "race_start" ;
        game.custom.status_time = second+10 ;
        race_info.components[0].value = "Prepare for race!";
        //game.setOpen(false) ;
        game.setUIComponent(race_info);
        createStartingGrid(game);
      }
      else if (race_info.components[0].value != "Qualifying session" && game.step%405 == 0)
      {
        race_info.components[0].value = "20 min qualifying session. Firstly carefully explore the map, and then show your maximum..";
        race_info.visible = true ;
        game.setUIComponent(race_info);
      }
      break ;

    case "race_start":
      t = Math.max(0,game.custom.status_time-second) ;
      if (t<=3)
      {
        countdown.components[0].value = t ;
        countdown.visible = true ;
        game.setUIComponent(countdown) ;
      }
      if (t == 0)
      {
        startRace(game) ;
        game.custom.status = "race" ;
      }
      break ;

    case "race":
      if (countdown.visible)
      {
        countdown.visible = false ;
        game.setUIComponent(countdown) ;
      }
      for (var i=0;i<game.ships.length;i++)
      {
        var ship = game.ships[i] ;
        if (ship.custom.lap_count>race_laps)
        {
          game.custom.status = "race_end" ;
          game.custom.status_time = second+time_after_race ;
          lap_info.components[0].value = "Checkered flag!" ;
          lap_info.visible = true ;
          ship.game.setUIComponent(lap_info);
        }
        else
        {
          var pos = (i+1);
          if (i<positions.length)
          {
            pos = positions[i];
          }
          var text = pos+"- Lap "+ship.custom.lap_count+"/"+race_laps ;
          if (ship.custom.race_info != text)
          {
            ship.custom.race_info = text ;
            race_info.components[0].value = text ;
            race_info.visible = true ;
            ship.setUIComponent(race_info);
          }
        }
      }
      break ;

    case "race_end":
      t = Math.max(0,game.custom.status_time-second) ;
      for (var i=0;i<game.ships.length;i++)
      {
        var ship = game.ships[i] ;
        var text ;
        if (ship.custom.lap_count>race_laps)
        {
          if (i==0)
          {
            text = "P1, P1! Good job, perfect race!";
          }
          else
          {
            if (i<positions.length)
            {
              text = positions[i]+ " Place! Podium, almost win. Next time, try to take 1st position:)";
            }
            else
            {
              text = "P"+(i+1)+"!"+" Good driving, man";
            }
          }
        }
        else
        {
          var pos = (i+1);
          if (i<positions.length)
          {
            pos = positions[i];
          }
          text = pos+" - Lap "+ship.custom.lap_count+"/"+race_laps ;
        }
        if (ship.custom.race_info != text)
        {
          ship.custom.race_info = text ;
          if (t>30)
          {
            race_info.components[0].value = text ;
            race_info.visible = true ;
            ship.setUIComponent(race_info);
          }
          lap_info.components[0].value = text ;
          lap_info.visible = true ;
          ship.setUIComponent(lap_info);
        }
      }
      if (t == 90)
      {
        race_info.components[0].value = "Checkered flag, Race End!";
        race_info.visible = true ;
        game.setUIComponent(race_info);
      }
      if (t == 0)
      {
        for (var i=0;i<game.ships.length;i++) {
          var rank = i<positions.length? positions[i] : ((i+1)+"th");
          var lap = formatLapTime(ship.custom.best_lap) ;

          ship.gameover({
            "Your rank": rank,
            "Your best lap": lap
          }) ;
          ship.custom.best_lap = 100000 ;
        }

        for (var i=0;i<game.ships.length;i++)
        {
      /*  var ship = game.ships[i] ;
          ship.custom.current_checkpoint = 0 ;
          ship.custom.lap_count = 0 ;
          ship.custom.checkpoint_count = 0 ;
          ship.custom.checkpoint_time = 0 ;
          ship.custom.lap_start = null ;
          spawnShip(ship); */
          var rank = i<positions.length? positions[i] : ((i+1)+"th");
          var lap = formatLapTime(ship.custom.best_lap) ;

          ship.gameover({
            "Your rank": rank,
            "Your best lap": lap
          }) ;
          ship.custom.best_lap = 100000 ;
        }
      }
      break ;
  }
} ;

var changeShip = function (ship) {
  if (game.custom.status = "qualification" && ship.x > -120 && ship.x < -100 && ship.y > 240 && ship.y < 260) {
    if (ship.type == 106) {
      ship.set({type:101})
    } else {
      ship.set({type:ship.type+1})
    }
  }
};


//!
var spawnShip = function(ship)
{
  var x = -100;
  var y = 250;
  ship.set({x:x,y:y,vx:0,vy:0,generator:300}) ;
}

var createStartingGrid = function(game) {
  var x = -250 ;// Pole position ship X coordinate

  for (var i=0;i<game.ships.length;i++)
  {
    var ship = game.ships[i];
    ship.custom.current_checkpoint = 0 ;
    ship.custom.lap_count = 0 ;
    ship.custom.checkpoint_count = 0 ;
    ship.custom.checkpoint_time = 0 ;
    ship.custom.lap_start = null ;
    ship.custom.checkpoint_delta = 0 ;
    if (i%2 ==0)
    {
      ship.set({x:x,y:325,vx:0,vy:0,idle:true,angle:180,generator:200}) ;
    }
    else
    {
      ship.set({x:x,y:305,vx:0,vy:0,idle:true,angle:180,generator:200}) ;
    }
    x = Math.max(-250,x+10) ; // (Pole position coordinate, x+10 / x-10 distance with position down)
  }
}

var startRace = function(game) {
  for (var i=0;i<game.ships.length;i++)
  {
    var ship = game.ships[i];
    ship.set({idle:false}) ;
    ship.custom.current_checkpoint = 0 ;
    ship.custom.lap_count = 0 ;
    ship.custom.checkpoint_count = 0 ;
    ship.custom.checkpoint_time = 0 ;
    ship.custom.lap_start = null ;
    ship.custom.checkpoint_delta = 0 ;
  }
  checkpoint_times = [] ;
}

this.tick = function(game) {

  if (game.collectibles.length<collectibles)
  {
    popCollectible(game);
  }
  for (var i=0;i<game.ships.length;i++)
  {
    var ship = game.ships[i];
    checkShip(ship);
  }
  if (game.step%60 == 0)
  {
    manageGame(game,game.step/60) ;
    updateScoreboard(game);

   for (var i=0;i<game.ships.length;i++)
    {
      var ship = game.ships[i];
      ship.setUIComponent(scoreboard);
      updateShipInfo(ship);
    }
  }
  
  //Collectibles
  
  if (game.step%605 == 0) {
    //DRSZONE 1
    game.addCollectible({code:90,x:30,y:365});
    game.addCollectible({code:90,x:70,y:365});
    game.addCollectible({code:90,x:110,y:365});
    game.addCollectible({code:90,x:150,y:365});
    game.addCollectible({code:90,x:190,y:365});
    game.addCollectible({code:90,x:230,y:365});
    //DRSZONE 2
    game.addCollectible({code:90,x:-19,y:135});
    game.addCollectible({code:90,x:-44,y:167});
    game.addCollectible({code:90,x:-43,y:215});
  } 
  // PitLane
  if (game.step%1305 == 0) {  
    game.addCollectible({code:21,x:-185,y:344.7});
    game.addCollectible({code:10,x:-175,y:344.7});
    game.addCollectible({code:10,x:-224,y:344.7});
    game.addCollectible({code:21,x:-234,y:344.7});
  }
  else if (game.step%1305 == 650) {
    game.addCollectible({code:20,x:-185,y:344.7});
    game.addCollectible({code:11,x:-175,y:344.7});
    game.addCollectible({code:20,x:-234,y:344.7});
    game.addCollectible({code:11,x:-224,y:344.7});
  }
  
} ;


this.event = function(event,game) {
  switch (event.name)
  {
    case "ship_spawned":
      if (event.ship != null)
      {
        spawnShip(event.ship) ;
      }
      break ;
  }
  
  switch (event.name) 
  {
    case "ui_component_clicked":
    var ship = event.ship;
    var component = event.id;
    if (component == "change") {
      changeShip(ship);
    }
    break;
  }

} ;