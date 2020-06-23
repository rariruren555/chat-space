# ChatSpace DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|email|string|null: false, unique: true|
|password|string|null: false|
|name|string|null: false, add_index: true|
### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :messages

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group-name|string|null: false|
### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :messages

## users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups