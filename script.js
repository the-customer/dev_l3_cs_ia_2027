const APP_NAME = "La papeterie du campus";
const body = document.body;
// const body = document.querySelector('body');


const Header = (title,slogan,logo) => {
    title = String(title).toUpperCase();
    const header = createEl('header');
    header.className = "site-header";
    const div1 = createEl('div');
    div1.className = "header-inner";
    const div2 = createEl('div');
    div2.className = "brand-mark";
    div2.setAttribute("aria-hidden",true);
    // if(logo === undefined){
    //     div2.textContent = `${title.charAt(0)}.`;
    // }else{
    //     div2.textContent = logo;
    // }

    // div2.textContent = logo === undefined ? `${title.charAt(0)}.` : logo;
    div2.textContent = !logo ? `${title.charAt(0)}.` : logo;

    const div3 = createEl('div');
    const p1 = createEl('p');
    p1.className = "brand-name";
    p1.textContent = title;
    const p2 = createEl('p');
    p2.className = "brand-caption";
    p2.textContent = slogan;
    div3.appendChild(p1);
    div3.appendChild(p2);
    div1.appendChild(div2);
    div1.appendChild(div3);
    header.appendChild(div1);
    return header;
}

const Title = (title,subTitle) => {
    // <h1 id="catalog-title">Prêt pour les cours.</h1>
    //     <p class="intro">Quelques essentiels, un panier tout simple.</p>
    const div = createEl('div');
    const h1 = createEl('h1');
    h1.id = "catalog-title";
    h1.textContent = title;
    const p = createEl('p');
    p.className = "intro";
    p.textContent = subTitle;
    // div.appendChild(h1)
    // div.appendChild(p)
    div.append(h1,p);
    return div;

}

const Input = (type,lbl) => {
    const label = createEl('label')
    label.className = 'search-label'
    label.setAttribute('for','product-search')
    label.textContent = lbl
    const input = createEl('input');
    input.className = 'search-input';
    input.id = 'product-search';
    input.type = type;
    input.setAttribute('placeholder','Cahier, stylo ...');
    const div = createEl('div');
    div.append(label,input);
    return div;
}

const Btn = (text) => {
    const button = createEl('button');
    button.className = 'category-button';
    button.type = 'button';
    button.setAttribute('aria-pressed',true);
    button.textContent = text;
    return button;
}

const createEl = el => document.createElement(el);


const main = createEl('main');
main.className = "shop-layout";
const section = createEl("section");
section.className = "catalog";
section.setAttribute("aria-labelledby","catalog-title");
main.appendChild(section);


body.appendChild(Header(APP_NAME,"Les essentiels de la rentrée","P."))
// body.appendChild(Header("ALYGORITHM","Coder en testant","A."))
// body.appendChild(Header("tesla","Coduire avec des risques"))
// body.appendChild(Header("4u","Offrir des kdo aux femmes"))
// body.appendChild(Header(3,"Offrir des kdo aux femmes"))


section.appendChild(Title("Prêt pour les cours.","Quelques essentiels, un panier tout simple."))

const div = createEl('div');
div.className = 'category-filters';
div.setAttribute('role','group')
div.setAttribute('aria-label','Catégories de produits');
div.append(Btn('Tous'),Btn('Cahier'),Btn('Stylo'));
section.append(Input('text','Recherche un article'))
section.append(div)

body.append(main);

