/**
 * @file 入口文件
 * @author zhangdaming
 */
const $ = window.$;
const options = {

};

class Index {
    constructor(props) {
        this.$body = $('body');
        this.$music = $('.music');
        this.$mp3 = $('.mp3');
        this.$btn = $('#btn');
        this.isPause = false;
        this.init(props);
    }
    init(props) {
        this.events();
    }
    events() {
        this.toggleMusic();
        this.go();
    }
    go() {
        this.$btn.on('click', () => {
            window.location.href = '/topic/childrenquestion';
        })
    }
    toggleMusic() {
        let self = this;
        if (!this.$music.pause) {
            this.$music.addClass('off');
        }
        this.$music.on('click', () => {
            this.$music.toggleClass('off')
            if (this.isPause) {
                this.$mp3[0].play();
                this.isPause = !this.isPause;
            } else {
                this.$mp3[0].pause();
                this.isPause = !this.isPause;
            }
        })
    }
}

new Index(options);