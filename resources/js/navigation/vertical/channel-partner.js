export default [

    {
      title: 'Dashboard',
      icon: { icon: 'tabler-smart-home' },
      to: 'dashboard',
      action: 'read',
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
      action: 'read',
      subject: 'application',
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

        },
        // {
        //   title: 'Add Record',
        //   to: 'record-add',

        // },
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
