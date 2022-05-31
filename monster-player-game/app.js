function randomValue(min, max) {
  return Math.floor(Math.random() * max - min) + min;
}
const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      gameLog: [],
    };
  },
  methods: {
    attackOnMonster() {
      this.currentRound++;
      const attackVal = randomValue(1, 10);
      this.monsterHealth -= attackVal;
      this.createGameLog("Player", " attacks", attackVal);
      this.attackOnPlayer();
    },
    attackOnPlayer() {
      const attackVal = randomValue(3, 12);
      this.playerHealth -= attackVal;
      this.createGameLog("Monster", " attacks", attackVal);
    },
    specialAttack() {
      this.currentRound++;
      const attackVal = randomValue(10, 15);
      this.monsterHealth -= attackVal;
      this.createGameLog("Player", "special attacks", attackVal);
      this.attackOnPlayer();
    },
    healPlayer() {
      let healValue = randomValue(10, 20);
      if (this.playerHealth + healValue > 100) {
        healValue = 100 - this.playerHealth;
      }
      this.playerHealth += healValue;
      this.createGameLog("Player", "Heal", healValue);
      this.attackOnPlayer();
    },
    surrenderGame() {
      this.winner = "monster";
      this.createGameLog("Player", "Surrender", "done");
    },
    createGameLog(who, action, val) {
      const log = {
        who: who,
        action: action,
        val: val,
      };
      this.gameLog.unshift(log);
    },
    getLogClass(classFor) {
      if (classFor == "Player") {
        return "log--player";
      } else if (classFor == "Monster") {
        return "log--monster";
      } else if (classFor == "Heal") {
        return "log--heal";
      } else {
        return "log--damage";
      }
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.gameLog = [];
    },
  },
  computed: {
    monsterHealthStyle() {
      const health = this.monsterHealth <= 0 ? 0 : this.monsterHealth;
      return { width: health + "%" };
    },
    playerHealthStyle() {
      const health = this.playerHealth <= 0 ? 0 : this.playerHealth;
      return { width: health + "%" };
    },
    enableSpacialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
});
app.mount("#game");
