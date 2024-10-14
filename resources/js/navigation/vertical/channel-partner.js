export default [

  {
    title: 'Dashboard',
    icon: { icon: 'tabler-smart-home' },
    to: 'dashboard',
    action: 'read',
    subject: 'dashboard',
  },

  {
    title: 'New Application',
    icon: { icon: 'tabler-school' },
    to: 'application-new',
    action: 'create',
    subject: 'application',
  },

  {
    title: 'Application Request',
    icon: { icon: 'tabler-clipboard-check' },
    to: 'application-request',
    action: 'read',
    subject: 'application-request',
  },

  {
    title: 'Compliance Request',
    icon: { icon: 'tabler-clipboard-check' },
    to: 'compliance-request',
    action: 'read',
    subject: 'compliance-request',
  },



  {
    title: 'Application List',
    icon: { icon: 'tabler-apps' },
    to: 'application',
    action: 'read',
    subject: 'application',
  },

  {
    title: 'University List',
    icon: { icon: 'tabler-apps' },
    to: 'university-list',
    action: 'read',
    subject: 'dashboard',

  },

  {
    title: 'Course Request List',
    icon: { icon: 'tabler-apps' },
    to: 'course-request-list',
    action: 'read',
    subject: 'dashboard',

  },

  {
    title: 'Course Request',
    icon: { icon: 'tabler-command' },
    action: 'read',
    subject: 'course-request',
    children: [
      {
        title: 'Course',
        to: 'course-request',
        action: 'read',
        subject: 'course-request',

      },

    ],
  },

  {
    title: 'Record',
    icon: { icon: 'tabler-files' },
    action: 'read',
    subject: 'record',
    children: [
      {
        title: 'All Record',
        to: 'record',
        action: 'read',
        subject: 'record',

      },

      {
        title: 'University',
        to: 'record-university',
        action: 'read',
        subject: 'record',

      },

      {
        title: 'Intake',
        to: 'record-intake',
        action: 'read',
        subject: 'record',

      },

    ],
  },

  {
    title: 'Roles & Permission',
    icon: { icon: 'tabler-command' },
    action: 'create',
    subject: 'dashboard',
    children: [
      {
        title: 'Roles',
        to: 'roles',
        action: 'create',
        subject: 'dashboard',

      },



      {
        title: 'Permissions',
        to: 'permissions',
        action: 'create',
        subject: 'dashboard',

      },

    ],
  },
  {
    title: 'User',
    icon: { icon: 'tabler-user' },
    to: 'user',
    action: 'read',
    subject: 'user',
  },

  {
    title: 'Email',
    icon: { icon: 'tabler-mail' },
    to: 'email',
    action: 'read',
    subject: 'email',

  },





]
