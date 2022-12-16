import $ from '../core';

$.prototype.animateOverTime = function (duration, callback, final) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / duration, 1);

        callback(complection);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof final === 'function') {
                final();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function (duration, display, final) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const animate = this.animateOverTime(duration, _fadeIn, final);
        requestAnimationFrame(animate);
    }

    return this;
};

$.prototype.fadeOut = function (duration, final) {
    for (let i = 0; i < this.length; i++) {
        
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;

            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const animate = this.animateOverTime(duration, _fadeOut, final);
        requestAnimationFrame(animate);
    }

    return this;
};

$.prototype.fadeToggle = function (duration, display, final) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };

            const animate = this.animateOverTime(duration, _fadeIn, final);
            requestAnimationFrame(animate);
        } else {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;

                if (complection === 1) {
                    this[i].style.display = 'none';
                }
            };

            const animate = this.animateOverTime(duration, _fadeOut, final);
            requestAnimationFrame(animate);
        }
    }

    return this;
};