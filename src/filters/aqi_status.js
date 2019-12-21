export default function (status){
    let className = '';
    switch (status){
        case '良好':
        className = 'status-color-level1'
        break;
        case '普通':
            className = 'status-color-level2';
            break;
        case '對敏感族群不健康':
            className = 'status-color-level3';
            break;
        case '對所有族群不健康':
            className = 'status-color-level4';
            break;
        case '非常不健康':
            className = 'status-color-level5';
            break;
        case '危害':
            className = 'status-color-level6';
            break;
        default:
            className = 'status-color-none';
            break;
    }
    return className;
}