
const sounds = new Tone.Players({
  'flute': 'media/427570__maria-mannone__flute-a-short-sequence.mp3',
  'fart': 'media/249583__ycbcr__short-definite-fart.mp3',
  'roar': 'media/132874__ecfike__monster-short-roar.mp3',
  'giggle': 'media/204497__holadios__short-giggle.mp3'
});

let soundNames = ['flute', 'fart', 'roar', 'giggle'];
let buttons = [];
const delay = new Tone.FeedbackDelay("8n", 0.5);
let slider;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();
  slider = createSlider(0., 1., 0.5, 0.05);
  slider.mouseReleased(() => {
    delay.delayTime.value = slider.value();
  })

  soundNames.forEach((lyric, index)=> {
    buttons[index] = createButton(lyric);
    buttons[index].position(index*80, 200);
    buttons[index].mousePressed( () => playSound(lyric));
  })
}

function draw() {
  background(220);
  text("Slider controls delay of echo", 0, 390);
}

function playSound(whichSound) {
  sounds.player(whichSound).start();
}