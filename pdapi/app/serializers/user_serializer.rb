class UserSerializer < ActiveModel::Serializer
  belongs_to :pod
  attributes :id, :name
  # has_and_belongs_to_many :events

end
