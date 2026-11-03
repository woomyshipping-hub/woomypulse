// 우마이 아르고스: 관리자 실적(business)과 월별 손익(settlement)만. GA4·Windsor 화면은 2026-11-03에 제거됨(business.js는 그대로 사용).
let gaView='business';
const defaultSubtitle=document.querySelector('#subtitle')?.textContent||'';
function renderWebsite(){$('#websitePanel').classList.toggle('hidden',page!=='website');$('.tabs[aria-label="채널 선택"]').classList.toggle('hidden',page==='website');if(page==='website'){status();$('#heading').textContent='우마이 아르고스'}
if($('#subtitle'))$('#subtitle').textContent=page==='website'?'잠들지 않는 백 개의 눈으로 우마이직구의 모든 숫자를 지켜봅니다.':defaultSubtitle;
let b=live?.business;$('#gaStatus').textContent=b?`관리자 결제 데이터 기준 · ${b.throughDate||''}까지`:'데이터 수집 대기 중';
$('#gaReportTitle').textContent=$(`[data-ga="${gaView}"]`)?.textContent||'실적 리포트';
$('#gaReport').innerHTML=gaView==='settlement'?(window.renderSettlement?renderSettlement(live?.settlement):''):(window.renderBusiness?renderBusiness(live?.business):'');}
window.renderWebsite=renderWebsite;
$('#gaNav').querySelectorAll('button').forEach(b=>b.onclick=()=>{gaView=b.dataset.ga;$('#gaNav').querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));renderWebsite()});
renderWebsite();
