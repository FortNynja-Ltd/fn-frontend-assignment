module.exports = () => ({
  user: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@fortnynja.com',
    company: 'FortNynja',
    preferredReportType: 'technical',
  },
  report: {
    id: '1',
    isPublished: true,
    isDeleted: false,
    status: 'ok',
    url: 'https://www.example.com`',
    createdAt: '2022-04-05T13:15:30Z',
    alerts: [
      {
        severity: 'medium',
        title: 'Directory Browsing',
        summary: {
          business:
            'The contents of your website is viewable. Hackers could gain useful information on how to craft the next attack vector.',
          technical:
            'It is possible to view the directory listing. Directory listing may reveal hidden scripts, include files, backup source files, etc. which can be accessed to read sensitive information.',
        },
        affectedUrls: ['*'],
      },
      {
        severity: 'high',
        title: 'SQL Injection',
        summary: {
          business:
            'Your database queries are not secure. Hackers could inject scripts to potentially retrieve sensitive data.',
          technical: 'SQL injection may be possible.',
        },
        affectedUrls: ['/users', '/search'],
      },
      {
        severity: 'low',
        title: 'Cookie without SameSite Attribute',
        summary: {
          business:
            'The cookies in your application are not configured correctly, which may allow hackers to misuse your application identity.',
          technical:
            'A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a "cross-site" request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.',
        },
        affectedUrls: ['/admin'],
      },
    ],
  },
})
