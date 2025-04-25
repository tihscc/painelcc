function updateClock() {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	// Adiciona zero à esquerda se for menor que 10
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000); // Atualiza a cada segundo
  updateClock(); // Executa imediatamente ao carregar