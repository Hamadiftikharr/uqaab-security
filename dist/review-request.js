function buildReviewEmail(values) {
  const value = name => String(values[name] || '').trim();
  const project = value('project').replace(/[\r\n]+/g, ' ');
  const subject = 'Security review request' + (project ? ' — ' + project : '');
  const body = [
    'Hello UQAAB Security,', '',
    'I would like to discuss a security review.', '',
    'Review type: ' + (value('service') || 'General security review'),
    'Project name: ' + (project || 'Not provided'),
    'Email: ' + value('email'),
    'Telegram / Discord: ' + (value('handle') || 'Not provided'),
    'Expected code-freeze date: ' + (value('freeze') || 'Not specified'),
    'Preferred review window: ' + (value('window') || 'Flexible / to be discussed'),
    '', 'Repository or scope summary:', value('scope') || 'To be discussed', '',
    'Thank you.'
  ].join('\r\n');
  return {subject, body, url: 'mailto:audits@uqaabsecurity.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)};
}
