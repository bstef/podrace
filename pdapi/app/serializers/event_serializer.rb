class EventSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :name, :user_id, :points
end
