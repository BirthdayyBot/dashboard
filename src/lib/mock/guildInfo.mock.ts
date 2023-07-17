import { GuildFeature, GuildNSFWLevel, GuildSystemChannelFlags, type APIGuild } from 'discord-api-types/v10';

export const GuildInfoMock: APIGuild = {
	id: '980559116076470272',
	name: 'Birthdayy Testing Server',
	icon: '22d85cf83ea4ef5a16f80753620ced8c',
	splash: null,
	discovery_splash: null,
	features: [GuildFeature.News, GuildFeature.Community],
	banner: null,
	owner_id: '267614892821970945',
	application_id: null,
	region: 'us-central',
	afk_channel_id: null,
	afk_timeout: 300,
	system_channel_id: '1086294199625846875',

	widget_enabled: false,
	widget_channel_id: null,
	verification_level: 1,
	roles: [
		{
			id: '980559116076470272',
			name: '@everyone',

			permissions: '111022861307456',
			position: 0,
			color: 0,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '980560581306232844',
			name: 'Birthdayy',

			permissions: '26930988772561',
			position: 18,
			color: 0,
			hoist: false,
			managed: true,
			mentionable: false,
			icon: null,
			unicode_emoji: null,
			tags: { bot_id: '916434908728164372' }
		},
		{
			id: '1080819909317099541',
			name: 'Birthdayy Dev',

			permissions: '26913808903377',
			position: 15,
			color: 0,
			hoist: false,
			managed: true,
			mentionable: false,
			icon: null,
			unicode_emoji: null,
			tags: { bot_id: '945106657527078952' }
		},
		{
			id: '1086294468522684519',
			name: 'ADMIN',

			permissions: '8',
			position: 19,
			color: 15277667,
			hoist: true,
			managed: false,
			mentionable: true,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1086294516262252584',
			name: 'USER',

			permissions: '2147484672',
			position: 5,
			color: 3066993,
			hoist: true,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1086294746395332688',
			name: 'BOT',

			permissions: '0',
			position: 4,
			color: 3447003,
			hoist: true,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1086295411150565406',
			name: 'BirthdayyTest',

			permissions: '26913808903377',
			position: 17,
			color: 0,
			hoist: false,
			managed: true,
			mentionable: false,
			icon: null,
			unicode_emoji: null,
			tags: { bot_id: '1063411719906529323' }
		},
		{
			id: '1086295883735384207',
			name: 'CUSTOM BOT',

			permissions: '0',
			position: 14,
			color: 15105570,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1086296093538656401',
			name: 'Custom Bot',

			permissions: '26913808903377',
			position: 3,
			color: 0,
			hoist: false,
			managed: true,
			mentionable: false,
			icon: null,
			unicode_emoji: null,
			tags: { bot_id: '1086054837961101404' }
		},
		{
			id: '1086296225780875426',
			name: 'PING ROLE',

			permissions: '0',
			position: 10,
			color: 7419530,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1086296294387089478',
			name: 'BIRTHDAY CHILD',

			permissions: '0',
			position: 11,
			color: 10181046,
			hoist: true,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1086296413903786054',
			name: 'bot',

			permissions: '0',
			position: 20,
			color: 0,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1086721259422883905',
			name: 'BirthdayyBot Dev',

			permissions: '8797636537392',
			position: 16,
			color: 0,
			hoist: false,
			managed: true,
			mentionable: false,
			icon: null,
			unicode_emoji: null,
			tags: { bot_id: '1086292928432967761' }
		},
		{
			id: '1086981135491399841',
			name: 'VOTE',

			permissions: '0',
			position: 9,
			color: 15844367,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1087065163452137544',
			name: 'stray kids',

			permissions: '8798239980791',
			position: 2,
			color: 0,
			hoist: false,
			managed: true,
			mentionable: false,
			icon: null,
			unicode_emoji: null,
			tags: { bot_id: '1033788393949253664' }
		},
		{
			id: '1092820381993287732',
			name: 'MANAGE SERVER',

			permissions: '32',
			position: 7,
			color: 0,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1092820794662457436',
			name: 'MANAGER',

			permissions: '0',
			position: 6,
			color: 8894573,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1092820919396859944',
			name: 'MANAGE ROLES',

			permissions: '268435456',
			position: 8,
			color: 0,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1103675986043736155',
			name: 'PROD BOT',

			permissions: '0',
			position: 13,
			color: 3447003,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1103676070697373796',
			name: 'DEV BOT',

			permissions: '0',
			position: 12,
			color: 3066993,
			hoist: false,
			managed: false,
			mentionable: false,
			icon: null,
			unicode_emoji: null
		},
		{
			id: '1111593814176571498',
			name: 'NAYEON',

			permissions: '525529836753',
			position: 1,
			color: 0,
			hoist: false,
			managed: true,
			mentionable: false,
			icon: null,
			unicode_emoji: null,
			tags: { bot_id: '1033789428721795162' }
		},
		{
			id: '1129786715108823127',
			name: 'Util Swiizyy',

			permissions: '8',
			position: 1,
			color: 0,
			hoist: false,
			managed: true,
			mentionable: false,
			icon: null,
			unicode_emoji: null,
			tags: { bot_id: '1129780731565056081' }
		}
	],
	default_message_notifications: 1,
	mfa_level: 0,
	explicit_content_filter: 2,
	max_presences: null,
	max_members: 500000,
	max_stage_video_channel_users: 50,
	max_video_channel_users: 25,
	vanity_url_code: null,
	premium_tier: 0,
	premium_subscription_count: 0,
	preferred_locale: 'en-US',
	rules_channel_id: '1086294199625846875',
	safety_alerts_channel_id: null,
	public_updates_channel_id: '1087099909913718855',
	hub_type: null,
	premium_progress_bar_enabled: false,
	nsfw_level: GuildNSFWLevel.Default,
	emojis: [],
	stickers: [],
	system_channel_flags: GuildSystemChannelFlags.SuppressGuildReminderNotifications,
	description: null
};