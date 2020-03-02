import Draft from './Draft';

export default Draft;
// import React, { useEffect, useRef } from 'react';
// import Two from 'two.js';
// import styles from './index.css';

// function DraftMenu() {
//   return <div className={styles['suri-draft-menu']}>menu</div>;
// }

// function DraftStage() {
//   const stageContainer = useRef(null);

//   useEffect(() => {
//     const canvas: unknown = stageContainer.current;
//     let params = { width: 285, height: 200 };
//     let two = new Two(params).appendTo(canvas as HTMLElement);

//     let circle = two.makeCircle(72, 100, 50);
//     let rect = two.makeRectangle(213, 100, 100, 100);

//     console.log('[two]', two);
//     console.log('[circle]', circle);
//     console.log('[rect]', rect);

//     circle.fill = '#FF8000';
//     circle.stroke = 'orangered';
//     circle.linewidth = 5;

//     rect.fill = 'rgb(0, 200, 255)';
//     rect.opacity = 0.75;
//     rect.noStroke();

//     two.update();
//   }, []);

//   return <div ref={stageContainer} />;
// }

// function Container() {
//   return (
//     <div className={styles['suri-container']}>
//       <DraftMenu />
//       <DraftStage />
//     </div>
//   );
// }

// export default Container;
