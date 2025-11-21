document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-rsvp');
  const modal = document.getElementById('rsvp-modal');

  const envelope = document.getElementById('envelope');
  const flap = document.getElementById('envelope-flap');
  const closeEnvelopeBtn = document.getElementById('close-envelope');

  function openEnvelope(){
    if(!envelope) return;
    envelope.classList.add('opened');
    envelope.setAttribute('aria-expanded','true');
    closeEnvelopeBtn && closeEnvelopeBtn.removeAttribute('aria-hidden');
    setTimeout(()=> openBtn && openBtn.focus(), 420);
  }
  function closeEnvelope(){
    if(!envelope) return;
    envelope.classList.remove('opened');
    envelope.setAttribute('aria-expanded','false');
    closeEnvelopeBtn && closeEnvelopeBtn.setAttribute('aria-hidden','true');
    setTimeout(()=> envelope.focus(), 220);
  }
  // Envelope handlers
  flap && flap.addEventListener('click', ()=> {
    if(modal && modal.classList.contains('open')) return;
    openEnvelope();
  });
  envelope && envelope.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openEnvelope(); }
  });
  closeEnvelopeBtn && closeEnvelopeBtn.addEventListener('click', closeEnvelope);

});
