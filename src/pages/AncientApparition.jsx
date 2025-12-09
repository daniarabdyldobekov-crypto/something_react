export default function AncientApparition() {
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
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/ancient_apparition_full.png"
            alt="Ancient Apparition"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1>Ancient Apparition</h1>
          <h3 style={{ marginTop: 0, color: "#888" }}>Support / Nuker / Disabler</h3>

          <p>
            Древний Призрак — мощный маг дальнего боя, способный останавливать
            лечение врагов и наносить огромный урон по площади своей ультимативной
            способностью Ice Blast.
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
              <li><strong>Сила:</strong> 20 + 1.9</li>
              <li><strong>Ловкость:</strong> 20 + 2.2</li>
              <li><strong>Интеллект:</strong> 23 + 3.4</li>
              <li><strong>Дальность атаки:</strong> 675</li>
              <li><strong>Скорость передвижения:</strong> 285</li>
              <li><strong>Броня:</strong> 2.1</li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <h2>Способности</h2>

        <h3>❖ Cold Feet</h3>
        <p>Накладывает заморозку, которая оглушает врага, если он не уйдёт на расстояние.</p>

        <h3>❖ Ice Vortex</h3>
        <p>Создаёт область, которая усиливает магический урон по врагам.</p>

        <h3>❖ Chilling Touch</h3>
        <p>Делает атаки союзников ледяными, увеличивая магический урон.</p>

        <h3>❖ Ice Blast (ULT)</h3>
        <p>Глобальный снаряд, запрещающий лечение и наносящий массовый урон.</p>
      </section>

      <section>
        <h2>Обзор</h2>
        <p>
          Один из лучших героев против героев с лечением — его ультимейт полностью
          останавливает регенерацию и хил.
        </p>
      </section>
    </div>
  );
}