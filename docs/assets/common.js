/* RelayTools Hub — Shared UI Utilities (Theme, Clipboard, File Download, Navigation) */
(function () {
  const THEME_KEY = 'relaytools_theme';

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark', isDark);
    const btn = document.getElementById('themeToggleBtn');
    if (btn) btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }

  window.toggleTheme = function () {
    const next = document.body.classList.contains('dark') ? 'light' : 'dark';
    try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
    applyTheme(next);
  };

  window.copyText = function (text, btn) {
    const done = () => {
      if (!btn) return;
      const prev = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = prev; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  };

  function fallbackCopy(text, cb) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(ta);
    if (cb) cb();
  }

  window.copyElementText = function (elementId, btn) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const val = (el.value !== undefined && el.tagName === 'TEXTAREA') ? el.value : el.innerText;
    window.copyText(val, btn);
  };

  window.downloadFile = function (filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType || 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  window.escapeHtml = function (str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  document.addEventListener('DOMContentLoaded', function () {
    let saved = 'light';
    try { saved = localStorage.getItem(THEME_KEY) || 'light'; } catch (_) {}
    applyTheme(saved);
  });
})();
