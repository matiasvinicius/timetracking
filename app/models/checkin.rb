class Checkin < ApplicationRecord

  #validation - server
  validates :typeCheckin, presence: {message: ":write a comment."}
  validates :latitude, :longitude, presence: {message: ": ‎make sure javascript is enabled."}
  validates :created_at, presence: {message: ":created_at can not be registered"}

end
