export default function Axe() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
        <div style={{ flex: "0 0 450px" }}>
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/axe_full.png"
            alt="Axe"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1>Axe</h1>
          <h3 style={{ marginTop: 0, color: "#888" }}>Initiator / Durable</h3>

          <p>
            Axe — один из лучших инициаторов в игре. Его способности позволяют
            провоцировать врагов на атаку, разрывать строй противника и устраивать
            хаос в командных боях. Отлично чувствует себя на линии и способен доминировать
            в ранней игре.
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "#1d1d1d",
              color: "white",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <h3>Основные характеристики</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><strong>Сила:</strong> 25 + 3.4</li>
              <li><strong>Ловкость:</strong> 20 + 2.2</li>
              <li><strong>Интеллект:</strong> 18 + 1.6</li>
              <li><strong>Атака:</strong> 55–59</li>
              <li><strong>Скорость передвижения:</strong> 310</li>
              <li><strong>Броня:</strong> 2.8</li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <h2>Способности</h2>

        <h3>❖ Berserker’s Call</h3>
        <p>Заставляет ближайших врагов атаковать Axe, одновременно давая ему бонусную броню.</p>

        <h3>❖ Battle Hunger</h3>
        <p>Накладывает на цель эффект, наносящий урон с течением времени и замедляющий её.</p>

        <h3>❖ Counter Helix</h3>
        <p>Когда Axe атакуют, он с шансом вращается, нанося урон всем рядом стоящим врагам.</p>

        <h3>❖ Culling Blade (ULT)</h3>
        <p>
          Мгновенно добивает врага с низким здоровьем. При успешном убийстве даёт Axe и союзникам
          мощное ускорение.
        </p>
      </section>

      <section>
        <h2>Обзор</h2>
        <p>
          Axe — мощный инициатор, способный переворачивать драки благодаря грамотным врыва
          и нанесению постоянного урона. Эффективен в ранней и средней стадии игры, а также
          отлично открывает пространство команде.
        </p>
      </section>
    </div>
  );
}