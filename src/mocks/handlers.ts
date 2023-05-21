import { rest } from 'msw'
import { GITHUB_API_URL } from '../config/constants'

export const handlers = [
  rest.get(GITHUB_API_URL, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        total_count: 873582,
        incomplete_results: false,
        items: [
          {
            id: 642323624,
            node_id: 'R_kgDOJkkUqA',
            name: 'DragGAN',
            full_name: 'XingangPan/DragGAN',
            private: false,
            owner: {
              login: 'XingangPan',
              id: 13579537,
              node_id: 'MDQ6VXNlcjEzNTc5NTM3',
              avatar_url:
                'https://avatars.githubusercontent.com/u/13579537?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/XingangPan',
              html_url: 'https://github.com/XingangPan',
              followers_url:
                'https://api.github.com/users/XingangPan/followers',
              following_url:
                'https://api.github.com/users/XingangPan/following{/other_user}',
              gists_url:
                'https://api.github.com/users/XingangPan/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/XingangPan/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/XingangPan/subscriptions',
              organizations_url: 'https://api.github.com/users/XingangPan/orgs',
              repos_url: 'https://api.github.com/users/XingangPan/repos',
              events_url:
                'https://api.github.com/users/XingangPan/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/XingangPan/received_events',
              type: 'User',
              site_admin: false,
            },
            html_url: 'https://github.com/XingangPan/DragGAN',
            description: 'Code for DragGAN (SIGGRAPH 2023)',
            fork: false,
            url: 'https://api.github.com/repos/XingangPan/DragGAN',
            forks_url: 'https://api.github.com/repos/XingangPan/DragGAN/forks',
            keys_url:
              'https://api.github.com/repos/XingangPan/DragGAN/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/XingangPan/DragGAN/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/XingangPan/DragGAN/teams',
            hooks_url: 'https://api.github.com/repos/XingangPan/DragGAN/hooks',
            issue_events_url:
              'https://api.github.com/repos/XingangPan/DragGAN/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/XingangPan/DragGAN/events',
            assignees_url:
              'https://api.github.com/repos/XingangPan/DragGAN/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/XingangPan/DragGAN/branches{/branch}',
            tags_url: 'https://api.github.com/repos/XingangPan/DragGAN/tags',
            blobs_url:
              'https://api.github.com/repos/XingangPan/DragGAN/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/XingangPan/DragGAN/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/XingangPan/DragGAN/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/XingangPan/DragGAN/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/XingangPan/DragGAN/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/XingangPan/DragGAN/languages',
            stargazers_url:
              'https://api.github.com/repos/XingangPan/DragGAN/stargazers',
            contributors_url:
              'https://api.github.com/repos/XingangPan/DragGAN/contributors',
            subscribers_url:
              'https://api.github.com/repos/XingangPan/DragGAN/subscribers',
            subscription_url:
              'https://api.github.com/repos/XingangPan/DragGAN/subscription',
            commits_url:
              'https://api.github.com/repos/XingangPan/DragGAN/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/XingangPan/DragGAN/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/XingangPan/DragGAN/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/XingangPan/DragGAN/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/XingangPan/DragGAN/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/XingangPan/DragGAN/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/XingangPan/DragGAN/merges',
            archive_url:
              'https://api.github.com/repos/XingangPan/DragGAN/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/XingangPan/DragGAN/downloads',
            issues_url:
              'https://api.github.com/repos/XingangPan/DragGAN/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/XingangPan/DragGAN/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/XingangPan/DragGAN/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/XingangPan/DragGAN/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/XingangPan/DragGAN/labels{/name}',
            releases_url:
              'https://api.github.com/repos/XingangPan/DragGAN/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/XingangPan/DragGAN/deployments',
            created_at: '2023-05-18T10:08:02Z',
            updated_at: '2023-05-21T12:29:30Z',
            pushed_at: '2023-05-19T22:25:50Z',
            git_url: 'git://github.com/XingangPan/DragGAN.git',
            ssh_url: 'git@github.com:XingangPan/DragGAN.git',
            clone_url: 'https://github.com/XingangPan/DragGAN.git',
            svn_url: 'https://github.com/XingangPan/DragGAN',
            homepage: null,
            size: 21019,
            stargazers_count: 6054,
            watchers_count: 6054,
            language: null,
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            has_discussions: false,
            forks_count: 261,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 27,
            license: null,
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            topics: [],
            visibility: 'public',
            forks: 261,
            open_issues: 27,
            watchers: 6054,
            default_branch: 'main',
            score: 1,
          },
        ],
      })
    )
  }),
]
