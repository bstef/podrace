class EventSerializer < ActiveModel::Serializer

  attributes :id, :name, :user_id, :points
  # has_and_belongs_to_many :users

end
