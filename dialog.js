class Dialog extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                .dialog {
                    display: grid;
                    grid-template-columns: 63px 1fr 63px;
                    grid-template-rows: 61px 1fr 61px;
                    width: 100%;
                    height: 100%;
                }

                .dialog div {
                }

                .dialog-topleft {
                    background-image: url('assets/images/dialog/dialog-topleft.png');
                    grid-column: 1;
                    grid-row: 1;
                }

                .dialog-top {
                    background-image: url('assets/images/dialog/dialog-top.png');
                    background-repeat: repeat-x;
                    grid-column: 2;
                    grid-row: 1;
                }

                .dialog-topright {
                    background-image: url('assets/images/dialog/dialog-topright.png');
                    grid-column: 3;
                    grid-row: 1;
                }

                .dialog-midleft {
                    background-image: url('assets/images/dialog/dialog-midleft.png');
                    background-repeat: repeat-y;
                    grid-column: 1;
                    grid-row: 2;
                }

                .dialog-mid {
                    background-image: url('assets/images/dialog/dialog-mid.png');
                    background-repeat: repeat;
                    grid-column: 2;
                    grid-row: 2;
                }

                .dialog-midright {
                    background-image: url('assets/images/dialog/dialog-midright.png');
                    background-repeat: repeat-y;
                    grid-column: 3;
                    grid-row: 2;
                }

                .dialog-bottomleft {
                    background-image: url('assets/images/dialog/dialog-bottomleft.png');
                    grid-column: 1;
                    grid-row: 3;
                }

                .dialog-bottom {
                    background-image: url('assets/images/dialog/dialog-bottom.png');
                    background-repeat: repeat-x;
                    grid-column: 2;
                    grid-row: 3;
                }

                .dialog-bottomright {
                    background-image: url('assets/images/dialog/dialog-bottomright.png');
                    grid-column: 3;
                    grid-row: 3;
                }

            </style>
            <div class="dialog">
                <div class="dialog-topleft"></div>
                <div class="dialog-top">
                    <slot name="top"></slot>
                </div>
                <div class="dialog-topright"></div>

                <div class="dialog-midleft"></div>
                <div class="dialog-mid">
                    <slot name="mid"></slot>
                </div>
                <div class="dialog-midright"></div>

                <div class="dialog-bottomleft"></div>
                <div class="dialog-bottom"></div>
                <div class="dialog-bottomright"></div>
            </div> 
        `;
    }


}
customElements.define('x-dialog', Dialog);