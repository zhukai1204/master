/**
 * 数组操作类
 */
function Arrays(){

}
/**
 * 对整型数组进行升序排序
 *
 * @arguments array 整型数组
 *
 * @returns 排序后的数组
 */
Arrays.sortAsc = function (array){
    for(var i  = 0;i < array.length;i++){
        for(var x = i;x < array.length;x++){
            if(array[i] > array[x]){
                var temp = array[x];
                array[x] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

/**
 * 将字符串数组转换为整型数组
 *
 * @arguments strArray 字符串数组
 *
 * @returns 整型数组
 */
Arrays.toNumArray = function (strArray){
    var numArray = new Array(strArray.length);
    for(var i = 0;i < strArray.length;i++){
        numArray[i] = Number(strArray[i]);
    }
    return numArray;
}

function calcGamePlayResult(array){
    array = Arrays.toNumArray(array);
    array = Arrays.sortAsc(array);
    //存储计算结果
    var resultArray = [];

    //计算顺子、半顺、杂六
    resultArray[1] = (array[2] - array[1] == 1 || array[2] - array[0] == 9||array[2] - array[1] == 9)? 1 : 0;
    resultArray[1] = array[1] - array[0] == 1 ? ++resultArray[1] :  resultArray[1];
    if((array[2]==9 && array[1]==8 && array[0]==0) || (array[2]==9 && array[1]==1 && array[0]==0)) resultArray[1]=2;
    
    //计算豹子、对子
    resultArray[0] = array[2] - array[1] == 0 ? 1 : 0;
    resultArray[0] = array[1] - array[0] == 0 ? ++resultArray[0] : resultArray[0];
    
    return resultArray;
}
function calc(numberArray){
    var resultArray = calcGamePlayResult(numberArray);
    var value = '';
    if(resultArray[0] == 1){
        value = "对子";
    }else if(resultArray[0] == 2){
        value = "豹子";
    }else if(resultArray[1] == 1){
        value = "半顺";
    }else if(resultArray[1] == 2){
        value = "顺子";
    }else{
        value = "杂六";
    };

    return value
}
const RESULT = {
	 //幸运28
    '1':function(data){
        var obj = {
            zh:parseInt(data[0])+parseInt(data[1])+parseInt(data[2])
        }
        obj['dx'] = obj.zh>=14?['大']:['小'];
        obj['ds'] = obj.zh%2==0?['双']:['单'];
        var hb = [3,6,9,12,15,18,21,24],
        lvb = [1,4,7,10,16,19,22,25],
        lanb = [2,5,8,11,17,20,23,26];
        if(hb.indexOf(parseInt(obj.zh)) != '-1'){
            obj['sb'] = ['红波'];
        }else if(lvb.indexOf(parseInt(obj.zh)) != '-1'){
            obj['sb'] = ['绿波'];
        }else if(lanb.indexOf(parseInt(obj.zh)) != '-1'){
            obj['sb'] = ['蓝波'];
        }else{
            obj['sb'] = ['--'];
        }
        var jd = [23,24,25,26,27],
        jx = [0,1,2,3,4];
        if(jd.indexOf(obj['zh']) != -1){
            obj['jz'] = ['极大'];
        }else if(jx.indexOf(obj['zh']) != -1){
            obj['jz'] = ['极小'];
        }else{
            obj['jz'] = ['--'];
        }
        obj['zh'] = [obj['zh']];
        let results = [];
        for(let name in obj){
        	results.push(obj[name]);
        }
        return results;
    },
    //时时彩
    '10':function(result){
        var zh =[];
        var lh =[];
        var qs =[];
        var zs =[];
        var hs =[];
        zh[0]=0;

        for(var i=0;i<result.length;i++)
        {
            zh[0] += Number(result[i]);
        }

        if(zh[0]>=23){
            zh[1]='大';
        }else{
            zh[1]='小';
        }

        if(zh[0] % 2 == 0){
            zh[2] = '双';
        }else{
            zh[2] = '单';
        }

        if(result[0] > result[4]){
            lh[0] = '龙';
        }else if(result[0] < result[4]){
            lh[0] = '虎';
        }else{
            lh[0] = '和';
        }

        var Array1 =[];
        var Array2 =[];
        var Array3 =[];

        for(var j = 0;j<3; j++){
            Array1.push(result[j]);
        }

        for(var j = 1;j<4; j++){
            Array2.push(result[j]);
        }

        for(var j = 2;j<5; j++){
            Array3.push(result[j]);
        }

        qs[0] = calc(Array1);
        zs[0] = calc(Array2);
        hs[0] = calc(Array3);
        return[...zh,...lh,...qs,...zs,...hs];
    },
}

export {
	RESULT
};