export default function Alchemist() {
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
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/alchemist_full.png"
            alt="Alchemist"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1>Alchemist</h1>
          <h3 style={{ marginTop: 0, color: "#888" }}>Carry / Durable / Disabler / Initiator</h3>

          <p>
            Алхимик — жадный, но крайне мощный керри, способный разгоняться быстрее
            любого героя в игре благодаря способности Greevil’s Greed. Он быстро
            зарабатывает золото, покупает ключевые артефакты и становится машиной по
            нанесению урона.
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
              <li><strong>Сила:</strong> 25 + 2.7</li>
              <li><strong>Ловкость:</strong> 22 + 1.2</li>
              <li><strong>Интеллект:</strong> 25 + 1.8</li>
              <li><strong>Атака:</strong> 50–56</li>
              <li><strong>Скорость передвижения:</strong> 295</li>
              <li><strong>Броня:</strong> 1.2</li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <h2>Способности</h2>

        <h3>❖ Acid Spray</h3>
        <p>Создаёт область кислоты, наносящей урон и уменьшающей броню противников.</p>

        <h3>❖ Unstable Concoction</h3>
        <p>Алхимик варит бомбу, которую может метнуть во врага. Чем дольше варит — тем сильнее эффект.</p>

        <h3>❖ Greevil’s Greed</h3>
        <p>Даёт дополнительное золото за убийство крипов и героев. Ключ к быстрому фарму.</p>

        <h3>❖ Chemical Rage (ULT)</h3>
        <p>Алхимик входит в безумие, получая огромную скорость атаки, регенерацию и мобильность.</p>
      </section>

      <section>
        <h2>Обзор</h2>
        <p>
          Один из самых быстрых по фарму керри в игре. С правильным таймингом Radiance и
          BKB может побеждать даже в тяжёлых играх.
        </p>
      </section>
    </div>
  );
}