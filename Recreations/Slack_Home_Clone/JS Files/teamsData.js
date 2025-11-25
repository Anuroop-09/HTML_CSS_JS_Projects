import basicListSvgs from "./basicSvg.js";
import conversations from "./conversion.js";

const PioneerStudios = {
    title: 'Pioneer Studios',
    basicList: [
        { item: 'All unreads', isStrong: true, svg: basicListSvgs.bars3BottomLeft },
        { item: 'Threads', isStrong: false, svg: basicListSvgs.chatBubbleLeft },
        { item: 'Mentions & reactions', isStrong: false, svg: basicListSvgs.atSymbol },
        { item: 'Drafts', isStrong: true, svg: basicListSvgs.documentDuplicate },
        { item: 'Show more', isStrong: false, svg: basicListSvgs.arrowDown }
    ],
    categories: {
        channels: {
            channelActive: true,
            categoryTitle: 'Channels',
            categoryList: [
                {
                    listActive: true,
                    name: 'announcements',
                    count: 1,
                    channelConversation: conversations.annoucements
                },
                {
                    name: 'social-media',
                    channelConversation: conversations.socialMedia
                },
                {
                    name: 'design-team',
                    channelConversation: conversations.designTeam,
                    count: 5
                }
            ],
        },
        marketing: {
            categoryTitle: 'Marketing',
            categoryList: [
                {
                    name: 'design-crit',
                    count: 4
                },
                {
                    name: 'team-chat',
                },
                {
                    name: 'media-and-pr',
                }],
        },
        directMessages: {
            isUser: true,
            categoryTitle: 'Direct Messages',
            categoryList: [
                {
                    name: 'Tony Stark'
                },
                {
                    name: 'Steve Roger'
                },
                {
                    name: 'Bruce Banner'
                },
                {
                    name: 'Natasha Johnson'
                },
                {
                    name: 'Wanda'
                },
                {
                    name: 'Hawkeye'
                }
            ],
        },
    },
};

const AstroInnovations = {
    title: 'Astro Innovations',
    basicList: [
        { item: 'All unreads', isStrong: false, svg: basicListSvgs.bars3BottomLeft },
        { item: 'Drafts', isStrong: true, svg: basicListSvgs.documentDuplicate },
        { item: 'Saved', isStrong: false, svg: basicListSvgs.bookmark },
        { item: 'Apps', isStrong: false, svg: basicListSvgs.bulletList },
        { item: 'Show more', isStrong: false, svg: basicListSvgs.arrowDown }
    ],
    categories: {
        
        
        main: {
            categoryTitle: 'Main',
            categoryList: [
                {
                    name: 'rules',
                },
                {
                    name: 'faq',
                    count: 65
                },
                {
                    name: 'support',
                    count: 8
                },
                {
                    name: 'roles',
                },
                {
                    name: 'resources',
                    count: 6
                }],
        },
        channels: {
            channelActive: true,
            categoryTitle: 'Channels',
            categoryList: [
                {
                    listActive: true,
                    name: 'announcements',
                    count: 11,
                    channelConversation: conversations.annoucements
                },
                {
                    name: 'social-media',
                    channelConversation: conversations.socialMedia
                },
                {
                    name: 'design-team',
                    channelConversation: conversations.designTeam,
                }
            ],
        },
        directMessages: {
            isUser: true,
            categoryTitle: 'Direct Messages',
            categoryList: [
                {
                    name: 'Anuroop Pamarthi'
                },
                {
                    name: 'Prasanth Ghantasala'
                },
                {
                    name: 'Harsha KV'
                },
                {
                    name: 'Deepak K'
                },
                {
                    name: 'Nayak BS'
                },
                {
                    name: 'Sandeep B'
                }
            ],
        },
    },
};

const CardinalSystems = {
    title: 'Cardinal Systems',
    basicList: [
        { item: 'All unreads', isStrong: true, svg: basicListSvgs.bars3BottomLeft },
        { item: 'Mentions & reactions', isStrong: false, svg: basicListSvgs.atSymbol },
        { item: 'Drafts', isStrong: true, svg: basicListSvgs.documentDuplicate },
        { item: 'Saved', isStrong: false, svg: basicListSvgs.bookmark },
        { item: 'Apps', isStrong: false, svg: basicListSvgs.bulletList },
        { item: 'Show more', isStrong: false, svg: basicListSvgs.arrowDown }
    ],
    categories: {
        other: {
            categoryTitle: 'Other',
            categoryList: [
                {
                    name: 'server-suggestions',
                    count: 8
                },
                {
                    name: 'code-runners',
                },
                {
                    name: 'approvers',
                },
                {
                    name: 'stats',
                    count: 2
                }],
        },
        helpChannel: {
            channelActive: true,
            categoryTitle: 'Help-Channel',
            categoryList: [
                {
                    name: 'react',
                    count: 8
                },
                {
                    name: 'full-stack',
                },
                {
                    name: 'other',
                    count: 134
                },
                {
                    name: 'stats',
                }],
        },
        channels: {
            channelActive: true,
            categoryTitle: 'Channels',
            categoryList: [
                {
                    listActive: true,
                    name: 'announcements',
                    count: 8
                    ,
                    channelConversation: conversations.annoucements
                },
                {
                    name: 'design-team',
                    channelConversation: conversations.designTeam,
                    count: 2
                },
                {
                    name: 'social-media',
                    channelConversation: conversations.socialMedia
                },
            ],
        },
        directMessages: {
            isUser: true,
            categoryTitle: 'Direct Messages',
            categoryList: [
                {
                    name: 'Angela Johnson'
                },
                {
                    name: 'Mike Cruize'
                },
                {
                    name: 'Richard Miles'
                },
            ],
        },
    },
};


export { PioneerStudios, AstroInnovations, CardinalSystems };