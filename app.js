// WAIT FOR PAGE TO LOAD
window.onload = () => {
    // GRAB THE ELEMENT THAT WILL CHANGE COLOR, E.G BODY 
    const body = document.querySelector('body');
    // ELEMENT THAT WILL CHANGE COLOR NEEDS HEIGHT: 100VH TO STOP GRADIENT BANDING
    // ANOTHER SOLUTION IS USING BACKGROUND IMAGE BUT THAT IS UP TO THE USER OF THIS PROGRAM
    body.style.height = `100vh`;
    // SET PREFERED COLOR SCHEME E.G COLORS OF THE SKY AT THE TIME OF THE DAY
    const colorScheme = {
        morning: `linear-gradient(to bottom, #FDB813, #FDB813)`,
        afternoon: `linear-gradient(to bottom, #87CEFA, #87CEFA)`,
        evening: `linear-gradient(to bottom, #00008B, #000080)`
    }
    // COLOR CHANGE PROGRAM CODE START
    const colorChange = (scheme) => {
        // VARIABLE TO HOLD CURRENT TIME
        const currentTime = new Date();
        // VARIABLE TO HOLD CURRENT TIME HOURS
        const hour = currentTime.getHours();
        // CHECK THE HOUR TO APPLY THE COLOR SCHEME CORRESPONDING TO THAT TIME
        if (hour >=6 && hour < 12){
            body.style.background = scheme.morning;
        } else if (hour >= 12 && hour < 18){
            body.style.background = scheme.afternoon;
        }
    }
    colorChange(colorScheme);
};