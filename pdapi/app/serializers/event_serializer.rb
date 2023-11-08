class EventSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :name, :user_id, :points
  has_many :events_users
  has_and_belongs_to_many :users, through: :events_users
end
