export default function ArcWarden() {
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
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/arc_warden_full.png"
            alt="Arc Warden"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1>Arc Warden</h1>
          <h3 style={{ marginTop: 0, color: "#888" }}>Carry / Nuker / Pusher</h3>

          <p>
            Arc Warden — герой, способный создавать свою идеальную копию, что открывает
            безумные возможности: двойные предметы, двойной фарм, двойное давление на карту.
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
              <li><strong>Сила:</strong> 22 + 2.1</li>
              <li><strong>Ловкость:</strong> 16 + 1.6</li>
              <li><strong>Интеллект:</strong> 24 + 2.6</li>
              <li><strong>Дальность атаки:</strong> 625</li>
              <li><strong>Скорость передвижения:</strong> 285</li>
              <li><strong>Броня:</strong> 1.8</li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <h2>Способности</h2>

        <h3>❖ Flux</h3>
        <p>Замедляет одиночную цель, нанося урон, если рядом нет союзников.</p>

        <h3>❖ Magnetic Field</h3>
        <p>Создаёт купол, дающий союзникам уклонение и скорость атаки.</p>

        <h3>❖ Spark Wraith</h3>
        <p>Призывает призрака, который ищет врага и наносит огромный урон при контакте.</p>

        <h3>❖ Tempest Double (ULT)</h3>
        <p>
          Создаёт копию Arc Warden с возможностью использовать предметы и способности.
          Главное оружие героя.
        </p>
      </section>

      <section>
        <h2>Обзор</h2>
        <p>
          Очень сильный керри с огромным потенциалом давления на карту. Требует высокого
          навыка микроконтроля.
        </p>
      </section>
    </div>
  );
}