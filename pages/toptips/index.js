import { TopTips } from '../../components/index';

Page(Object.assign({}, TopTips, {
    data: {},

    showTopTips() {
        this.showWuliTopTips('toptips的内容');
    }
}));
