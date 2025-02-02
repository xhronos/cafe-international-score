import { createSignal, type Component } from "solid-js";

const PlayerName: Component = () => {
  const [playerName, setPlayerName] = createSignal("Player ?");

  return (
    <div class="">
      <input
        name="player-name"
        data-testid="player-name"
        class="px-2 py-1 border border-black w-32"
        type="text"
        value={playerName()}
        onChange={(e) => setPlayerName(e.currentTarget.value)}
      />
    </div>
  );
};

export default PlayerName;
