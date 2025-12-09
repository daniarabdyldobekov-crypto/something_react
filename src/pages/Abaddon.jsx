export default function Abaddon() {
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
      {/* Верхняя секция — фото + описание + статы */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* Фото героя */}
        <div style={{ flex: "0 0 450px" }}>
          <img
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/abaddon_full.png"
            alt="Abaddon"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        {/* Информация о герое */}
        <div style={{ flex: 1 }}>
          <h1 style={{ marginBottom: "10px" }}>Abaddon</h1>
          <h3 style={{ marginTop: 0, color: "#888" }}>Carry / Support / Durable</h3>

          <p style={{ lineHeight: "1.5" }}>
            Абаддон — предводитель орд Аверно. Он использует проклятую магию тумана
            Аврелиан для защиты союзников и истощения врагов. Благодаря способности
            <strong> Borrowed Time</strong> герой может игнорировать смертельный урон и
            мгновенно восстанавливать здоровье, что делает его одним из самых живучих
            персонажей в Dota 2.
          </p>

          {/* Статы справа */}
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
            <h3 style={{ marginTop: 0 }}>Основные характеристики</h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.6" }}>
              <li><strong>Сила:</strong> 22 + 2.6</li>
              <li><strong>Ловкость:</strong> 23 + 1.5</li>
              <li><strong>Интеллект:</strong> 18 + 2.0</li>
              <li><strong>Атака:</strong> 56–66</li>
              <li><strong>Дальность атаки:</strong> 150 (ближний бой)</li>
              <li><strong>Скорость передвижения:</strong> 325</li>
              <li><strong>Броня:</strong> 3.48</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Способности */}
      <section>
        <h2>Способности</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h3>❖ Mist Coil</h3>
            <p>
              Абаддон жертвует частью собственного здоровья, чтобы нанести урон врагу
              или вылечить союзника при помощи тумана Аверно.
            </p>
          </div>

          <div>
            <h3>❖ Aphotic Shield</h3>
            <p>
              Создаёт вокруг союзника защитную оболочку, которая поглощает урон и
              взрывается, нанося урон врагам вокруг.
            </p>
          </div>

          <div>
            <h3>❖ Curse of Avernus</h3>
            <p>
              Атаки Абаддона накладывают проклятие, замедляя врага. После нескольких
              ударов враг замолкает, а союзники получают ускорение при атаке.
            </p>
          </div>

          <div>
            <h3>❖ Borrowed Time (ULT)</h3>
            <p>
              Абаддон становится практически неуязвимым: весь получаемый урон вместо
              уменьшения здоровья лечит его. Автоматически активируется при получении
              смертельного удара.
            </p>
          </div>
        </div>
      </section>

      {/* Общая информация */}
      <section>
        <h2>Обзор и роль в игре</h2>
        <p>
          Абаддон универсален: он может выступать как керри, так и саппортом первой
          линии. Его сильные стороны — высокая живучесть, лечение и снятие эффектов
          контроля с помощью <strong>Aphotic Shield</strong>.
        </p>
        <p>
          Легок в освоении, полезен на любом этапе игры, особенно в затяжных драках.
        </p>
      </section>
    </div>
  );
}