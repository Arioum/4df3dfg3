self.onmessage = async function () {
  try {
    const response = await fetch('http://localhost:4000/feedback');
    const data = await response.json();
    postMessage(data);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    postMessage([]);
  }
};
