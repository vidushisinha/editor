export default {
	css: `
    /* css code here */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        display: flex;
        min-height: 100vh;
        background: #100f10;
        align-items: center;
        justify-content: center;
    }
    
    h2 {
        color: #100f10;
        font-size: 14vw;
        position: relative;
        text-transform: uppercase;
        -webkit-text-stroke: 0.3vw #f7f7fe;
    }
    
    h2::before {
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        color: #37b9f1;
        overflow: hidden;
        position: absolute;
        content: attr(data-text);
        border-right: 2px solid #37b9f1;
        -webkit-text-stroke: 0vw #f7f7fe;
        animation: animate 6s linear infinite;
    }
    
    @keyframes animate {
        0%,
        10%,
        100% {
            width: 0;
        }
    
        70%,
        90% {
            width: 100%;
        }
    }
    `,
	html: `<!-- html code here-->
    <h2 data-text="Coding...">Coding...</h2>`,
	javascript: `/* javaScript code here */ `,
};
