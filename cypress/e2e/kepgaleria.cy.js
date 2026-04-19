describe('kepgaleria funkciok', () => {
  it('passes', () => {
    cy.visit('https://nao529.github.io/kepgaleria/')
  });

  it('kepek_megjelenese', function() {
    cy.visit("https://nao529.github.io/kepgaleria/")
    cy.get('div.nagykep img').should('have.length',1)
    cy.get('div.kiskep img').should('have.length',8)
    cy.get('div.nagykep img').should('have.attr', "src", "kepek/kawasaki_ninja_zx6r.jpg")
    const KEPLISTA = [
        {
            kep: "kepek/kawasaki_ninja_zx6r.jpg",
            modell: "Kawasaki Ninja ZX-6R"
        },
        {
            kep: "kepek/kawasaki_ninja_h2.jpg",
            modell: "Kawasaki Ninja H2"
        },
        {
            kep: "kepek/yamaha_mt07.jpg",
            modell: "Yamaha MT-07"
        },
        {
            kep: "kepek/indian_scout_bobber.jpg",
            modell: "Indian Scout Bobber"
        },
        {
            kep: "kepek/ducati_monster_1200s.jpg",
            modell: "Ducati Monster 1200S"
        },
        {
            kep: "kepek/honda_cbr_650r.jpg",
            modell: "Honda CBR 650R"
        },
        {
            kep: "kepek/honda_cb500fa.jpg",
            modell: "Honda CB500F"
        },
        {
            kep: "kepek/honda_gsxr750.jpg",
            modell: "Honda GSX-R750"
        },
    ];
    cy.get("div.kiskep img").each((img,index)=>{
      expect(img).to.have.attr("src", KEPLISTA[index].kep)
    });
  });
  it("kattintas_kiskepekre", function () {
    cy.visit("https://nao529.github.io/kepgaleria/")  
    cy.get("div.kiskep img").each((img,index)=>{
      cy.get(".kiskep img").eq(index).invoke("attr", "src").then((src)=>{
        cy.get(".kiskep img").eq(index).click();
        cy.get(".nagykep img").should("have.attr", "src", src);
      })
    });
  });
  it("jobbra_leptetes", function () {
    cy.visit("https://nao529.github.io/kepgaleria/");
    cy.get("div.kiskep img").each((img,index)=>{
      cy.get(".kiskep img").eq(index).invoke("attr", "src").then((src)=>{
        cy.get(".nagykep img").should("have.attr", "src", src);
        cy.get("button.jobb").click();
      })
    });
  });
  it("elsorol_utolsora_leptetes", function () {
    cy.visit("https://nao529.github.io/kepgaleria/");
    cy.get("div.kiskep img").last().invoke("attr", "src").then((src)=>{
      cy.get("button.bal").click();
      cy.get("div.nagykep img").should("have.attr", "src", src);
    });
  });
  it("utolsorol_elsore_leptetes", function () {
    cy.visit("https://nao529.github.io/kepgaleria/");
    cy.get("div.kiskep img").first().invoke("attr", "src").then((src)=>{
      cy.get("div.kiskep img").last().click();
      cy.get("button.jobb").click();
      cy.get("div.nagykep img").should("have.attr", "src", src);
    });
  });
});