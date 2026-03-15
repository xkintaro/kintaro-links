import { useEffect } from 'react';

const KintaroSnowEffect = () => {
    useEffect(() => {
        const snowContainer = document.getElementById('kintaro-snow-container');
        if (!snowContainer) return;

        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.className = 'kintaro-snowflake';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
            snowflake.style.opacity = Math.random();
            snowflake.style.width = `${Math.random() * 10 + 5}px`;
            snowflake.style.height = snowflake.style.width;
            snowContainer.appendChild(snowflake);

            snowflake.addEventListener('animationiteration', () => {
                snowflake.remove();
            });
        };

        let snowInterval = setInterval(createSnowflake, 200);

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                snowContainer.innerHTML = '';
                clearInterval(snowInterval);
                snowInterval = setInterval(createSnowflake, 200);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearInterval(snowInterval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return <div id="kintaro-snow-container" className="kintaro-snow-container"></div>;
};

export default KintaroSnowEffect;