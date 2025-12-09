export default function AntiMage() {
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
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/antimage_full.png"
            alt="Anti-Mage"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1>Anti-Mage</h1>
          <h3 style={{ marginTop: 0, color: "#888" }}>Carry / Escape</h3>

          <p>
            Anti-Mage — один из самых мобильных и опасных керри в игре. Его способности
            уничтожают ману врагам, что делает его идеальным убийцей магов.
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
              <li><strong>Сила:</strong> 19 + 1.3</li>
              <li><strong>Ловкость:</strong> 24 + 2.8</li>
              <li><strong>Интеллект:</strong> 12 + 1.8</li>
              <li><strong>Атака:</strong> 53–57</li>
              <li><strong>Скорость передвижения:</strong> 310</li>
              <li><strong>Броня:</strong> 3.4</li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <h2>Способности</h2>

        <h3>❖ Mana Break</h3>
        <p>Сжигает ману врагов при атаке и наносит дополнительный урон.</p>

        <h3>❖ Blink</h3>
        <p>Телепортирует Anti-Mage на небольшое расстояние. Его главное средство выживания.</p>

        <h3>❖ Counterspell</h3>
        <p>Создаёт щит, отражающий направленные заклинания врага.</p>

        <h3>❖ Mana Void (ULT)</h3>
        <p>Наносит большой урон в зависимости от недостающей маны цели.</p>
      </section>

      <section>
        <h2>Обзор</h2>
        <p>
          Один из лучших лейт-керри, способный уничтожать магов за секунды. Требует фарма
          и хорошей позиции.
        </p>
      </section>
    </div>
  );
}