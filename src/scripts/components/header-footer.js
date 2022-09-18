class HeaderFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container text-center mt-4">
                            <p class="footer">&copy; 2020. Dibuat oleh Irvanda.</p>
                        </div>`;
    }
}

customElements.define('header-footer',HeaderFooter);