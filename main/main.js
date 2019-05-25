module.exports = function main(inputStr) {
    // ���ַ���ӳ���
    var numSign = {
        '0': ['._.', '|.|', '|_|'],
        '1': ['...', '..|', '..|'],
        '2': ['._.', '._|', '|_.'],
        '3': ['._.', '._|', '._|'],
        '4': ['...', '|_|', '..|'],
        '5': ['._.', '|_.', '._|'],
        '6': ['._.', '|_.', '|_|'],
        '7': ['._.', '..|', '..|'],
        '8': ['._.', '|_|', '|_|'],
        '9': ['._.', '|_|', '..|']
    };

    const LINE = 3;    // ������ɨ�����
    var outputStr = '';
    var len = inputStr.length;

    for (var i = 0; i < LINE; i++) {
        for (var j = 0; j < len; j++) {
            outputStr += numSign[inputStr[j]][i];
            if (j != len - 1) {    // ÿ�����һ�����Ų��ӿո����������ӿո��
                outputStr += ' ';
            }
        }
        outputStr += '\n';
    }

    console.log(outputStr);

    return outputStr;
};