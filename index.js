// 🌟 Resume Form
const form = document.getElementById('resumeForm');

// 🌟 Convert newlines to <br>
function convertNewlinesToBr(text) {
  return text.replace(/\n/g, '<br>');
}

// 🌟 Live Preview Update
function updatePreview() {
  document.getElementById('pName').textContent = form.name.value.trim() || 'Your Name';
  document.getElementById('pFather').textContent = form.father.value.trim() || '---';
  document.getElementById('pPhone').textContent = form.phone.value.trim() || '---';
  document.getElementById('pEmail').textContent = form.email.value.trim() || '---';
  document.getElementById('pAddress').textContent = form.address.value.trim() || '---';

  document.getElementById('pObjective').innerHTML =
    form.objective.value.trim() ? convertNewlinesToBr(form.objective.value.trim()) : '---';
  document.getElementById('pExperience').innerHTML =
    form.experience.value.trim() ? convertNewlinesToBr(form.experience.value.trim()) : '---';
  document.getElementById('pEducation').innerHTML =
    form.education.value.trim() ? convertNewlinesToBr(form.education.value.trim()) : '---';

  // Skills update
  const skillsInput = form.skills.value.trim();
  const skillsArray = skillsInput.split(/[\n,]+/).map(s => s.trim()).filter(s => s);
  const skillsList = document.getElementById('pSkills');
  skillsList.innerHTML = '';
  skillsArray.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Date + Signature
  document.getElementById('resumeSignature').textContent = form.name.value.trim() || 'Signature';
  document.getElementById('resumeDate').textContent = form.name.value.trim() || 'Date';
}

// 🔁 Live input updates
form.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', updatePreview);
});
updatePreview();

// 🎨 Apply Font Family
document.getElementById('applyCustomizations').addEventListener('click', () => {
  const fontFamily = document.getElementById('fontFamily').value;
  const resume = document.querySelector('.a4');
  resume.style.fontFamily = fontFamily;
});

// 💾 PDF Download
function downloadResumePDF() {
  const element = document.querySelector('.a4');
  alert('📄 Generating your resume PDF...');
  window.scrollTo(0, 0);

  const opt = {
    margin: [10, 10, 10, 10],
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  setTimeout(() => {
    html2pdf().set(opt).from(element).save();
  }, 500);
}

const downloadBtn = document.getElementById('downloadPdf');
if (downloadBtn) downloadBtn.addEventListener('click', downloadResumePDF);

// 🌟 Splash Screen animation + fade out
document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;

  setTimeout(() => {
    splash.style.transition = 'opacity 0.5s ease';
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.style.display = 'none';
    }, 500);
  }, 2500); // show animation for 2.5s
});
