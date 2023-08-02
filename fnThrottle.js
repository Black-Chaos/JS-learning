// const container = document.querySelector('.container');

// const throttle = document.createElement('div');
// throttle.className = 'count';
// const evt = document.createElement('div');
// evt.className = 'count';
// container.append(throttle, evt);

// let evtCount = 0;
// let throttleCount = 0;

// window.addEventListener('scroll', onScroll);

// function onScroll() {
//     evtCount += 1;
//     evt.innerText = evtCount;
// }

// window.addEventListener('scroll', onThrottle(throtCount, 300));

// function onThrottle(cb, t) {
//     let on = 1;
//     return () => {
//         if (on) {
//             on = 0;
//             cb();
//             setTimeout(() => (on = 1), t);
//         }
//     };
// }
// function throtCount() {
//     throttleCount += 1;
//     throttle.innerText = throttleCount;
// }
