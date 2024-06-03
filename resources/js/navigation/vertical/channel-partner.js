export default [

    {
      title: 'Dashboard',
      icon: { icon: 'tabler-smart-home' },
      to: 'dashboard',
      action: 'view',
      subject: 'application',
    },

    {
      title: 'New Application',
      icon: { icon: 'tabler-apps' },
      to: 'application-new',
      action: 'create',
      subject: 'application',
    },

    {
      title: 'Application History',
      icon: { icon: 'tabler-apps' },
      to: 'application',
      action: 'view',
      subject: 'application',
    },

    {
      title: 'Record',
      icon: { icon: 'tabler-files' },
      action: 'create',
      subject: 'record',
      children: [
        {
          title: 'All Record',
          to: 'record',

        },
        {
          title: 'Add Record',
          to: 'record-add',

        },
        {
          title: 'University',
          to: 'record-university',

        },

        {
          title: 'Intake',
          to: 'record-intake',

        },



      ],
    },



  ]
