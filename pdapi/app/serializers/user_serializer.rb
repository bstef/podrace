class UserSerializer < ActiveModel::Serializer
  belongs_to :pod
  attributes :id, :name
  has_many :events_users
  has_and_belongs_to_many :events, through: :events_users

end
