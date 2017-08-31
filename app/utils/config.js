import {StyleSheet, View, Text} from 'react-native';
//游戏
const Game = {
	'1' : 'PC蛋蛋',
	'10': '重庆时时彩',
	'20': '北京赛车PK0',
    '30': '香港六合彩',
    '40': '快三',
    '50': '福彩3D'
}

//游戏类型
const GameType = {
	'1':'1',
	'10':'10',
	'20':'20',
    '30':'30',
    '40':'40',
    '50':'50'
}

//玩法类型
const MethodType = {
	'1':{ //幸运28 
		'600001':'0-27 数字',
	    '600002':'大、小、单、双',
	    '600003':'波色赔率（红绿蓝）',
	    '600005':'豹子',
	    '600006':'大单、小单、大双、小双',
	    '600007':'极大、极小',
	},
	'10':{ //时时彩
		'700001':'第一球',
        '700002':'第二球',
        '700003':'第三球',
        '700004':'第四球',
        '700005':'第五球',
        '700006':'第一球',
        '700007':'第二球',
        '700008':'第三球',
        '700009':'第四球',
        '700010':'第五球',
        '700011':'龙虎和',
        '700012':'二字定位',
        '700013':'三字定位',
        '700014':'全五一字组合',
        '700015':'前三一字组合',
        '700016':'中三一字组合',
        '700017':'后三一字组合',
        '700018':'前三二字组合',
        '700019':'中三二字组合',
        '700020':'后三二字组合',
        '700021':'二字和值',
        '700022':'前三组选三',
        '700023':'中三组选三',
        '700024':'后三组选三',
        '700025':'前三组选六',
        '700026':'中三组选六',
        '700027':'后三组选六',
        '700028':'前三跨度',
        '700029':'中三跨度',
        '700030':'后三跨度',
        '700031':'定位龙虎和',
        '700032':'一字定位 万位数字盘大小单双质合',
        '700033':'一字定位 千位数字盘大小单双质合',
        '700034':'一字定位 百位数字盘大小单双质合',
        '700035':'一字定位 十位数字盘大小单双质合',
        '700036':'一字定位 个位数字盘大小单双质合',
        '700037':'前三',
        '700038':'中三',
        '700039':'后三',
        '700040':'牛牛',
        '700041':'牛牛双面',
        '700042':'牛牛梭哈'
	},
	'20':{ //PK10 
		'704000':'冠军(第1名)',
        '704001':'亚军(第2名)',
        '704002':'第3名',
        '704003':'第4名',
        '704004':'第5名',
        '704005':'第6名',
        '704006':'第7名',
        '704007':'第8名',
        '704008':'第9名',
        '704009':'第10名',
        '704010':'冠军(第1名)',
        '704011':'亚军(第2名)',
        '704012':'第3名',
        '704013':'第4名',
        '704014':'第5名',
        '704015':'第6名',
        '704016':'第7名',
        '704017':'第8名',
        '704018':'第9名',
        '704019':'第10名',
        '704020':'冠亚和值',
        '704021':'冠亚和值大小单双',
        '704022':'冠亚和值龙虎',
	},
    '30':{//六合彩
        '701000':'特码A',
        '701001':'特码B',
        '701002':'正码',
        '701003':'正码特(正特一)',
        '701004':'正码特(正特二)',
        '701005':'正码特(正特三)',
        '701006':'正码特(正特四)',
        '701007':'正码特(正特五)',
        '701008':'正码特(正特六)',
        '701003':'正特一',
        '701004':'正特二',
        '701005':'正特三',
        '701006':'正特四',
        '701007':'正特五',
        '701008':'正特六',
        '701015':'过关',
        '701016':'三全中',
        '701017':'三中二之中二(之中三)',
        '701018':'二全中',
        '701019':'二中特之中特(之中二)',
        '701020':'特串',
        '701021':'四中一',
        '701022':'半波',
        '701023':'尾数',
        '701024':'一肖',
        '701025':'二肖',
        '701026':'三肖',
        '701027':'四肖',
        '701028':'五肖',
        '701029':'六肖',
        '701030':'七肖',
        '701031':'八肖',
        '701032':'九肖',
        '701033':'十肖',
        '701034':'十一肖',
        '701035':'二肖连中',
        '701036':'三肖连中',
        '701037':'四肖连中',
        '701038':'五肖连中',
        '701039':'二肖连不中',
        '701040':'三肖连不中',
        '701041':'四肖连不中',
        '701042':'二尾连中',
        '701043':'三尾连中',
        '701044':'四尾连中',
        '701045':'二尾连不中',
        '701046':'三尾连不中',
        '701047':'四尾连不中',
        '701048':'5不中',
        '701049':'6不中',
        '701050':'7不中',
        '701051':'8不中',
        '701052':'9不中',
        '701053':'10不中',
        '701054':'11不中',
        '701055':'特码生肖',
        '701056':'正码B',
        '701057':'色波'
    },
    '40':{ //快三
        '705000':'点数',
        '705001':'双面盘',
        '705002':'围骰',
        '705004':'短牌(对子)',
        '705005':'长牌',
    },
    '50':{ //福彩3D排列三
        '702000':'一字定位佰',
        '702001':'一字定位拾',
        '702002':'一字定位个',
        '702003':'佰位双面盘',
        '702004':'拾位双面盘',
        '702005':'个位双面盘',
        '702006':'两面',
        '702007':'三字和数',
        '702008':'二字和数佰拾',
        '702009':'二字和数佰个',
        '702010':'二字和数拾个',
        '702011':'一字组合',
        '702012':'二字组合',
        '702013':'三字组合',
        '702014':'二字定位佰拾',
        '702015':'二字定位佰个',
        '702016':'二字定位拾个',
        '702017':'三字定位',
        '702018':'跨度',
    }
}

//玩法类型分割
const MethodTypeChunk = {
	'1': { //28
        '混合': ['600002', '600003', '600005', '600006', '600007'],
        '特码': ['600001']
    },
    '10':{ //时时彩
    	'两面':['700006', '700007', '700008',  '700009',  '700010', '700011'],
        '1-5球':['700001', '700002', '700003', '700004', '700005'],
        '前中后':['700037', '700038', '700039'],
        '牛牛': ['700040', '700041', '700042'],
    },
    '20':{ //PK10
        '两面':['704021','704010', '704011', '704012', '704013', '704014','704015', '704016', '704017', '704018', '704019'],
        '冠亚和': ['704020'],
        '1-5名': ['704000', '704001', '704002', '704003', '704004'],
        '6-10名': ['704005', '704006', '704007', '704008', '704009']
    },
    '30': { //六合彩
        '特码A': ['701000'],
        '特码B':['701001'],
        '正码': ['701002'],
        '正码特': ['701003','701004','701005','701006','701007','701008'],
        '特肖': ['701055'],
        '色波': ['701057'],
        '正码1-6': ['701009','701010','701011', '701012', '701013', '701014'],
    },
    '40':{//快三
        '两面':['705001'],
        '点数':['705000'],
        '围骰':['705002'],
        '短牌':['705004'],
        '长牌':['705005'],
    },
    '50':{ //福彩 排列三
        '双面盘':['702003','702004','702005'],
        '两面':['702006'],
        '组合':['702011','702012','702013'],
        '跨度':['702018'],
        '一字定位':['702000','702001','702002'],
        '二字和数':['702008','702009','702010'],
        '二字定位':['702014','702015','702016'],
        '三字和数':['702007'],
        '三字定位':['702017'],
    }
}
//具体玩法
const Methods = {
	//幸运28
    "600001": {"type": "num", "chunk":4, "begin": 0, "end": 27, "names":[]},
    "600002": {"type": "text", "chunk":4, "begin": 0, "end": 3, "names":['大', '小', '单', '双']},
    "600003": {"type": "text", "chunk":3, "begin": 0, "end": 2, "names":['红', '绿', '蓝']},
    "600005": {"type": "text", "chunk":1, "begin": 0, "end": 0, "names":['豹子']},
    "600006": {"type": "text", "chunk":4, "begin": 0, "end": 3, "names":['大单', '小单', '大双', '小双']},
    "600007": {"type": "text", "chunk":2, "begin": 0, "end": 1, "names":['极大', '极小']},

    //时时彩
    "700001": {"type": "num", "chunk":3, "begin": 0, "end": 9, "names":[]},
    "700002": {"type": "num", "chunk":3, "begin": 0, "end": 9, "names":[]},
    "700003": {"type": "num", "chunk":3, "begin": 0, "end": 9, "names":[]},
    "700004": {"type": "num", "chunk":3, "begin": 0, "end": 9, "names":[]},
    "700005": {"type": "num", "chunk":3, "begin": 0, "end": 9, "names":[]},
    "700006": {"type": "text", "chunk":4, "begin": 0, "end": 3,/*"end": 5,*/"names":['大', '小', '单', '双', '质', '和']},
    "700007": {"type": "text", "chunk":4, "begin": 0, "end": 3,/*"end": 5,*/"names":['大', '小', '单', '双', '质', '和']},
    "700008": {"type": "text", "chunk":4, "begin": 0, "end": 3,/*"end": 5,*/"names":['大', '小', '单', '双', '质', '和']},
    "700009": {"type": "text", "chunk":4, "begin": 0, "end": 3,/*"end": 5,*/"names":['大', '小', '单', '双', '质', '和']},
    "700010": {"type": "text", "chunk":4, "begin": 0, "end": 3,/*"end": 5,*/"names":['大', '小', '单', '双', '质', '和']},
    "700011": {"type": "text", "chunk":4, "begin": 0, "end": 6,"names":['总大', '总小', '总单', '总双', '龙', '虎', '和']},
    "700037": {"type": "text", "chunk":3, "begin": 0, "end": 4,"names":['豹子', '顺子', '对子', '半顺', '杂六']},
    "700038": {"type": "text", "chunk":3, "begin": 0, "end": 4,"names":['豹子', '顺子', '对子', '半顺', '杂六']},
    "700039": {"type": "text", "chunk":3, "begin": 0, "end": 4,"names":['豹子', '顺子', '对子', '半顺', '杂六']},
    "700040": {"type": "text", "chunk":3,"begin": 0, "end": 10,"names":['无牛', '牛一', '牛二', '牛三', '牛四', '牛五', '牛六', '牛七', '牛八', '牛九', '牛牛']},
    "700041": {"type": "text", "chunk":3, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '质', '合']},
    "700042": {"type": "text", "chunk":3, "begin": 1, "end": 8, "names":['五条', '炸弹', '葫芦', '顺子', '三条', '两对', '单对', '散号']},

    //北京赛车
    "704000": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704001": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704002": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704003": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704004": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704005": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704006": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704007": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704008": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704009": {"type": "num", "chunk":3, "begin": 1, "end": 10, "names":[]},
    "704010": {"type": "text","chunk":3, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '龙', '虎']},
    "704011": {"type": "text","chunk":3, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '龙', '虎']},
    "704012": {"type": "text","chunk":3, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '龙', '虎']},
    "704013": {"type": "text","chunk":3, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '龙', '虎']},
    "704014": {"type": "text","chunk":3, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '龙', '虎']},
    "704015": {"type": "text","chunk":3, "begin": 0, "end": 3, "names":['大', '小', '单', '双']},
    "704016": {"type": "text","chunk":3, "begin": 0, "end": 3, "names":['大', '小', '单', '双']},
    "704017": {"type": "text","chunk":3, "begin": 0, "end": 3, "names":['大', '小', '单', '双']},
    "704018": {"type": "text","chunk":3, "begin": 0, "end": 3, "names":['大', '小', '单', '双']},
    "704019": {"type": "text","chunk":3, "begin": 0, "end": 3, "names":['大', '小', '单', '双']},
    "704020": {"type": "num", "chunk":3, "begin": 3, "end": 19,"names":[]},
    "704021": {"type": "text","chunk":3,"begin": 0,"end": 3,"names":['大', '小', '单', '双']},
    "704022": {"type": "text","chunk":2,"begin": 0,"end": 9,"names":['1vs10龙', '1vs10虎','2vs9龙','2 vs 9 虎','3 vs 8 龙','3 vs 8 虎','4 vs 7 龙','4 vs 7 虎','5 vs 6 龙','5 vs 6 虎']},

     //六合彩
    "701000": {"type": "text", "chunk":5, "begin": 1, "end": 66, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','特码大','特码小','特码单' ,'特码双' ,'合数单' ,'合数双' ,'红波' ,'蓝波' ,'绿波' ,'特码尾大' ,'特码尾小' ,'特码大单' ,'特码小单' ,'特码大双' ,'特码小双' ,'家禽' ,'野兽']},
    "701001": {"type": "text", "chunk":5, "begin": 1, "end": 66, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','特码大','特码小','特码单' ,'特码双' ,'合数单' ,'合数双' ,'红波' ,'蓝波' ,'绿波' ,'特码尾大' ,'特码尾小' ,'特码大单' ,'特码小单' ,'特码大双' ,'特码小双' ,'家禽' ,'野兽']},
    "701002": {"type": "text", "chunk":3, "begin": 1, "end": 53, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','特码大', '总合大' , '总合小' ,'总合单' ,'总合双']},
    "701003": {"type": "text", "chunk":5, "begin": 1, "end": 58, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','大', '小', '单', '双', '合数单', '合数双', '红波', '蓝波', '绿波']},
    "701004": {"type": "text", "chunk":5, "begin": 1, "end": 58, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','大', '小', '单', '双', '合数单', '合数双', '红波', '蓝波', '绿波']},
    "701005": {"type": "text", "chunk":5, "begin": 1, "end": 58, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','大', '小', '单', '双', '合数单', '合数双', '红波', '蓝波', '绿波']},
    "701006": {"type": "text", "chunk":5, "begin": 1, "end": 58, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','大', '小', '单', '双', '合数单', '合数双', '红波', '蓝波', '绿波']},
    "701007": {"type": "text", "chunk":5, "begin": 1, "end": 58, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','大', '小', '单', '双', '合数单', '合数双', '红波', '蓝波', '绿波']},
    "701008": {"type": "text", "chunk":5, "begin": 1, "end": 58, "names":['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','大', '小', '单', '双', '合数单', '合数双', '红波', '蓝波', '绿波']},
    "701009": {"type": "text", "chunk":1, "begin": 1, "end": 13, "names":['大', '小', '单', '双', '合单', '合双', '合大', '合小', '红波', '蓝波', '绿波', '尾大', '尾小']},
    "701010": {"type": "text", "chunk":1, "begin": 1, "end": 13, "names":['大', '小', '单', '双', '合单', '合双', '合大', '合小', '红波', '蓝波', '绿波', '尾大', '尾小']},
    "701011": {"type": "text", "chunk":1, "begin": 1, "end": 13, "names":['大', '小', '单', '双', '合单', '合双', '合大', '合小', '红波', '蓝波', '绿波', '尾大', '尾小']},
    "701012": {"type": "text", "chunk":1, "begin": 1, "end": 13, "names":['大', '小', '单', '双', '合单', '合双', '合大', '合小', '红波', '蓝波', '绿波', '尾大', '尾小']},
    "701013": {"type": "text", "chunk":1, "begin": 1, "end": 13, "names":['大', '小', '单', '双', '合单', '合双', '合大', '合小', '红波', '蓝波', '绿波', '尾大', '尾小']},
    "701014": {"type": "text", "chunk":1, "begin": 1, "end": 13, "names":['大', '小', '单', '双', '合单', '合双', '合大', '合小', '红波', '蓝波', '绿波', '尾大', '尾小']},
    "701015": {"type": "text", "chunk":1, "begin": 1, "end": 7, "names":['大', '小', '单', '双', '合单', '合双', '合大', '合小', '红波', '蓝波', '绿波', '尾大', '尾小']},
    "701022": {"type": "text", "begin": 1,"end": 18,"names":['红单', '红双', '红大', '红小', '绿单', '绿双', '绿大', '绿小', '蓝单', '蓝双', '蓝大', '蓝小', '红合单', '红合双', '绿合单', '绿合双', '蓝合单', '蓝合双']},
    "701023": {"type": "num", "begin": 0, "end": 9, "names":[]},
    "701024": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701025": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701026": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701027": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701028": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701029": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701030": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701031": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701032": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701033": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701034": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701035": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701036": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701037": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701038": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701039": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701040": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701041": {"type": "text", "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701042": {"type": "num", "begin": 0, "end": 9, "names":[]},
    "701043": {"type": "num", "begin": 0, "end": 9, "names":[]},
    "701044": {"type": "num", "begin": 0, "end": 9, "names":[]},
    "701045": {"type": "num", "begin": 0, "end": 9, "names":[]},
    "701046": {"type": "num", "begin": 0, "end": 9, "names":[]},
    "701047": {"type": "num", "begin": 0, "end": 9, "names":[]},
    "701048": {"type": "num", "begin": 1, "end": 49, "names":[]},
    "701049": {"type": "num", "begin": 1, "end": 49, "names":[]},
    "701050": {"type": "num", "begin": 1, "end": 49, "names":[]},
    "701051": {"type": "num", "begin": 1, "end": 49, "names":[]},
    "701052": {"type": "num", "begin": 1, "end": 49, "names":[]},
    "701053": {"type": "num", "begin": 1, "end": 49, "names":[]},
    "701054": {"type": "num", "begin": 1, "end": 49, "names":[]},
    "701055": {"type": "text", "chunk":3, "begin": 1, "end": 12, "names":[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']},
    "701057": {"type": "text", "chunk":3, "begin": 1, "end": 27, "names":['红波','蓝波','绿波','红大','红小','红单','红双','蓝大','蓝小','蓝单','蓝双','绿大','绿小','绿单','绿双','红大单','红大双','红小单','红小双','蓝大单','蓝大双','蓝小单','蓝小双','蓝大单','蓝大双','蓝小单','蓝小双']},

    //快三
    "705000": {"type": "text", "chunk":4, "begin": 4, "end": 17, "names":['4点' ,'5点' ,'6点' ,'7点' ,'8点' ,'9点' ,'10点' ,'11点' ,'12点' ,'13点' ,'14点' ,'15点' ,'16点' ,'17点']},
    "705001": {"type": "text", "chunk":4, "begin": 0, "end": 3, "names":['大', '小', '单', '双']},
    "705002": {"type": "text", "chunk":3, "begin": 0, "end": 6, "names":['全围', '围骰1', '围骰2', '围骰3', '围骰4', '围骰5', '围骰6']},
    '705004': {"type": "text", "chunk":3, "begin": 1, "end": 6, "names":['对⼦1', '对⼦2', '对⼦3', '对⼦4', '对⼦5', '对⼦6']},
    '705005': {"type": "arr", "chunk":3, "begin": 0, "end": 14, "names":['12', '13', '14', '15', '16', '23', '24', '25', '26', 34, 35, 36, 45, 46, 56]},

    //福彩3D排列三
    '702000':{"type": "num", "chunk":1, "begin": 0, "end": 9, "names":[]},
    '702001':{"type": "num", "chunk":1, "begin": 0, "end": 9, "names":[]},
    '702002':{"type": "num", "chunk":1, "begin": 0, "end": 9, "names":[]},
    '702003':{"type": "text", "chunk":1, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '质', '合']},
    '702004':{"type": "text", "chunk":1, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '质', '合']},
    '702005':{"type": "text", "chunk":1, "begin": 0, "end": 5, "names":['大', '小', '单', '双', '质', '合']},
    '702006':{"type": "text", "chunk":6, "begin": 1, "end": 44, "names":['佰位_大', '佰位_小', '佰位_单', '佰位_双', '佰位_质', '佰位_合','拾位_大', '拾位_小', '拾位_单', '拾位_双', '拾位_质', '拾位_和','个位_大', '个位_小', '个位_单', '个位_双', '个位_质', '个位_和', '佰拾和数_单', '佰拾和数_双','佰个和数_单','佰个和数_双', '拾个和数_单', '拾个和数_双', '佰拾个和数_大','佰拾个和数_小','佰拾个和数_单','佰拾个和数_双','佰拾和尾数_大','佰拾和尾数_小','佰拾和尾数_质','佰拾和尾数_合','佰个和尾数_大','佰个和尾数_小','佰个和尾数_质','佰个和尾数_合','拾个和尾数_大','拾个和尾数_小','拾个和尾数_质','拾个和尾数_合','佰拾个和尾数_大','佰拾个和尾数_小','佰拾个和尾数_质','佰拾个和尾数_合']},
    '702007':{"type": "num", "chunk":5, "begin": 0, "end": 27, "names":[]},
    '702008':{"type": "num", "chunk":1, "begin": 0, "end": 18, "names":[]},
    '702009':{"type": "num", "chunk":1, "begin": 0, "end": 18, "names":[]},
    '702010':{"type": "num", "chunk":1, "begin": 0, "end": 18, "names":[]},
    '702011':{"type": "num","chunk":5, "begin": 0, "end": 9, "names":[]},
    '702012':{"type": "names", "chunk":5, "begin": 0, "end": 0, "names":['00', '01', '02', '03', '04', '05','06','07','08','09','11','12','13','14','15','16','17','18','19','22','23','24','25','26','27','28','29','33','34','35','36','37','38','39','44','45','46','47','48','49','55','56','57','58','59','66', '67','68', '69','77','78','79','88','99']},
    '702013':{"type": "names", "chunk":5, "begin": 0, "end": 0, "names":["000", "001", "002", "003", "004", "005", "006", "007", "008", "009", "011", "012", "013", "014", "015", "016", "017", "018", "019", "022", "023", "024", "025", "026", "027", "028", "029", "033", "034", "035", "036", "037", "038", "039", "044", "045", "046", "047", "048", "049", "055", "056", "057", "058", "059", "066", "067", "068", "069", "077", "078", "079", "088", "099","111", "112", "113", "114", "115", "116", "117", "118", "119", "122", "123", "124", "125", "126", "127", "128", "129", "133", "134", "135", "136", "137", "138", "139", "144", "145", "146", "147", "148", "149", "155", "156", "157", "158", "159", "166", "167", "168", "169", "177", "178", "179", "188", "199","222", "223", "224", "225", "226", "227", "228", "229", "233", "234", "235", "236", "237", "238", "239", "244", "245", "246", "247", "248", "249", "255", "256", "257", "258", "259", "266", "267", "268", "269", "277", "278", "279", "288", "299","333", "334", "335", "336", "337", "338", "339", "344", "345", "346", "347", "348", "349", "355", "356", "357", "358", "359", "366", "367", "368", "369", "377", "378", "379", "388", "399","444", "445", "446", "447", "448", "449", "455", "456", "457", "458", "459", "466", "467", "468", "469", "477", "478", "479", "488", "499","555", "556", "557", "558", "559", "566", "567", "568", "569", "577", "578", "579", "588", "599","666", "667", "668", "669", "677", "678", "679", "688", "699","777", "778", "779", "788", "799","888", "899","999"]},
    '702014':{"type": "names", "chunk":5, "begin": 0, "end": 0, "names":['00', '01', '02', '03', '04', '05','06','07','08','09','11','12','13','14','15','16','17','18','19','22','23','24','25','26','27','28','29','33','34','35','36','37','38','39','44','45','46','47','48','49','55','56','57','58','59','66', '67','68', '69','77','78','79','88','99']},
    '702015':{"type": "names", "chunk":5, "begin": 0, "end": 0, "names":['00', '01', '02', '03', '04', '05','06','07','08','09','11','12','13','14','15','16','17','18','19','22','23','24','25','26','27','28','29','33','34','35','36','37','38','39','44','45','46','47','48','49','55','56','57','58','59','66', '67','68', '69','77','78','79','88','99']},
    '702016':{"type": "names", "chunk":5, "begin": 0, "end": 0, "names":['00', '01', '02', '03', '04', '05','06','07','08','09','11','12','13','14','15','16','17','18','19','22','23','24','25','26','27','28','29','33','34','35','36','37','38','39','44','45','46','47','48','49','55','56','57','58','59','66', '67','68', '69','77','78','79','88','99']},
    '702017':{"type": "names", "chunk":5, "begin": 0, "end": 0, "names":['000','001','002','003','004','005','006','007','008','009','011','012','013','014','015','016','017','018','019','022','023','024','025','026','027','028','029','033','034','035','036','037','038','039','044','045','046','047','048','049','055','056','057','058','059','066','067','068','069','077','078','079','088','099','100','101','102','103','104','105','106','107','108','109','111','112','113','114','115','116','117','118','119','122','123','124','125','126','127','128','129','133','134','135','136','137','138','139','144','145','146','147','148','149','155','156','157','158','159','166','167','168','169','177','178','179','188','199','200','201','202','203','204','205','206','207','208','209','211','212','213','214','215','216','217','218','219','222','223','224','225','226','227','228','229','233','234','235','236','237','238','239','244','245','246','247','248','249','255','256','257','258','259','266','267','268','269','277','278','279','288','299','300','301','302','303','304','305','306','307','308','309','311','312','313','314','315','316','317','318','319','322','323','324','325','326','327','328','329','333','334','335','336','337','338','339','344','345','346','347','348','349','355','356','357','358','359','366','367','368','369','377','378','379','388','399','400','401','402','403','404','405','406','407','408','409','411','412','413','414','415','416','417','418','419','422','423','424','425','426','427','428','429','433','434','435','436','437','438','439','444','445','446','447','448','449','455','456','457','458','459','466','467','468','469','477','478','479','488','499','500','501','502','503','504','505','506','507','508','509','511','512','513','514','515','516','517','518','519','522','523','524','525','526','527','528','529','533','534','535','536','537','538','539','544','545','546','547','548','549','555','556','557','558','559','566','567','568','569','577','578','579','588','599','600','601','602','603','604','605','606','607','608','609','611','612','613','614','615','616','617','618','619','622','623','624','625','626','627','628','629','633','634','635','636','637','638','639','644','645','646','647','648','649','655','656','657','658','659','666','667','668','669','677','678','679','688','699','700','701','702','703','704','705','706','707','708','709','711','712','713','714','715','716','717','718','719','722','723','724','725','726','727','728','729','733','734','735','736','737','738','739','744','745','746','747','748','749','755','756','757','758','759','766','767','768','769','777','778','779','788','799','800','801','802','803','804','805','806','807','808','809','811','812','813','814','815','816','817','818','819','822','823','824','825','826','827','828','829','833','834','835','836','837','838','839','844','845','846','847','848','849','855','856','857','858','859','866','867','868','869','877','878','879','888','899','900','901','902','903','904','905','906','907','908','909','911','912','913','914','915','916','917','918','919','922','923','924','925','926','927','928','929','933','934','935','936','937','938','939','944','945','946','947','948','949','955','956','957','958','959','966','967','968','969','977','978','979','988','999']},
    '702018':{"type": "num", "chunk":5, "begin": 0, "end": 9, "names":[]},
}

const GameRule = function(gameId){
    let styles = StyleSheet.create({
        dirRow:{
            flexDirection:'row'
        }
    });
    MethodRules = ()=>{
        let rules = {
            "1":(<View>
                    <View style={styles.dirRow}>
                        <Text>大：</Text>
                        <Text>三个位置的数值相加和大于等于14,15,16,17,18,19,20,21,22,23,24,25,26,27为大。</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>小：</Text>
                        <Text>三个位置的数值相加和小于等于00,01,02,03,04,05,06,07,08,09,10,11,12,13为小。</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>单：</Text>
                        <Text>三个位置的数值相加和为单就为单。</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>双：</Text>
                        <Text>三个位置的数值相加和为双就为双。</Text>
                    </View>
                     <View style={styles.dirRow}>
                        <Text>双：</Text>
                        <Text>三个位置的数值相加和为双就为双。</Text>
                    </View>
                     <View style={styles.dirRow}>
                        <Text>大单（三个数值和）：</Text>
                        <Text>15,17,19,21,23,25,27为大单。</Text>
                    </View>
                     <View style={styles.dirRow}>
                        <Text>小单（三个数值和）：</Text>
                        <Text>01,03,05,07,09,11,13为小单。</Text>
                    </View>
                     <View style={styles.dirRow}>
                        <Text>大双（三个数值和）：</Text>
                        <Text>14,16,18,20,22,24,26为大双。</Text>
                    </View>
                     <View style={styles.dirRow}>
                        <Text>小双（三个数值和）：</Text>
                        <Text>00,02,04,06,08,10,12为小双。</Text>
                    </View>
                     <View style={styles.dirRow}>
                        <Text>极大（三个数值和）：</Text>
                        <Text>23,24,25,26,27为极大。</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>极小（三个数值和）：</Text>
                        <Text>00,01,02,03,04为极小。</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>红波（三个数值和）：</Text>
                        <Text>03,06,09,12,15,18,21,24为红波。</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>绿波（三个数值和）：</Text>
                        <Text>01,04,07,10,16,19,22,25为绿波。</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>蓝波（三个数值和）：</Text>
                        <Text>02,05,08,11,17,20,23,26为蓝波。注:当开奖结果为：0,13,14,27(所有买的波色皆输)视为全部不中奖！</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>豹子：</Text>
                        <Text>當期開出三個數字相同即為豹子。</Text>
                    </View>
                    <View style={styles.dirRow}>
                        <Text>特码（三个数值和）：</Text>
                        <Text>單選取一個數字投注。</Text>
                    </View>
                 </View>)
        }
        return rules[GameType[gameId]];
    }

    let GameRules = {
        "1":(<View>
                <Text>以下所有投注皆含本金。</Text>
                <Text>「PC蛋蛋（幸运28）」按北京快乐8的开奖结果为基础。</Text>
                <Text>北京快乐8开奖结果，每日179期，每天9:00 - 23:55，每5分钟公布一次</Text>
                <Text>北京快乐8开奖结果，排序后,分别按号码第 1~6 , 7~12 , 13~18 分为【1】【2】【3】三个区；「把每个区的数字分别相加：三个数值相加求余即为幸运28最终的开奖结果。</Text>
                <Text>例如北京快乐8开奖结果为：01,02,04,08,15,16, 25,31,40,41,43,47, 55,56,59,66,69,74, 78,79 开奖结果即为：6,7,9;</Text>
                <Text>每个号码详细计算步骤：</Text>
                <Text>第一个号码：1+2+4+8+15+16 = 46%10 = 6</Text>
                <Text>第二个号码：25+31+40+41+43+47 = 227%10 = 7</Text>
                <Text>第三个号码： 55+56+59+66+69+74 = 379%10 = 9</Text>
                <Text>具体游戏规则如下：</Text>
                {this.MethodRules()}                
             </View>),
        "10":(<View></View>),
        "20":(<View></View>),
        "30":(<View></View>),
        "40":(<View></View>),
        "50":(<View></View>)
    }

    return rules[method];
}

export {
	Game,
	GameType,
	MethodType,
	MethodTypeChunk,
	Methods,
    GameRule
};